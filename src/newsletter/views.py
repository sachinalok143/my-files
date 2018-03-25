from django.core.mail import send_mail
from django import forms
from django.conf import settings
from django.shortcuts import render
from .models import *
from .forms import *
import datetime
from django.http import HttpResponseRedirect
# Create your views here.
from .fusionchart import FusionCharts


def navbar(request):
	return render(request,"base.html",{}) 


def home(request):
	title="welcome"
	if request.user.is_authenticated():
		title="hi! %s."%(request.user)
	content="%s"%str(request)
	
	form=signUpForm(request.POST or None)
	context={
		"template_title":title,	
		"content":content,
		"form":form,
	}

	if form.is_valid():
		instance = form.save(commit=False)
		# print (instance)
		if not instance.full_name:
			instance.full_name="Sachin"
		instance.save()
		context={
		"template_title":"Thank you!",
		}
	if request.user.is_authenticated() and request.user.is_staff:
		queryset=signUp.objects.all().order_by('-timestamp')
		context={
		"query":queryset
		}

	return render(request,"home.html",context)



def expensesView(request):
	form=addExpensesForm(request.POST or None)
	if form.is_valid():
		stuff=form.save(commit=False)
		No_Of_Stuffs=form.cleaned_data.get("No_Of_Stuffs")
		Price_Per_Piece=form.cleaned_data.get("Price_Per_Piece")
		stuff.Total_Expenses=int(No_Of_Stuffs)*int(Price_Per_Piece)
		stuff.save()
	allExpenses=Expenses.objects.all().order_by("-Time")
	# print(allExpenses)
	categories=Category.objects.all().order_by('-Title')
	# print(categories)
	class creatStuff(object):
		def __init__(self, Name=None, Total=None):
			self.Name =Name
			self.Total = Total
	chartdata=''
	chartdataForMonth=''
	if len(allExpenses)>0:
		date=str(allExpenses[0].Time.date())
		stuffs=[]
		stuffsForMonth=[]
		total=0
		total1=0
		parts = str(allExpenses[0].Time.date()).split("-");
		month=parts[1]
		year=parts[0]
		for expense in allExpenses:
			parts = str(expense.Time.date()).split("-");
			if parts[1]==month and parts[0]==year:
				total1+=expense.Total_Expenses
			else :
				stuffsForMonth.append(creatStuff(Name=year+'-'+month,Total=total1))
				total1=expense.Total_Expenses
				month=parts[1]
				year=parts[0]
		
			if str(date)==str(expense.Time.date()):
				total+=expense.Total_Expenses
			else:
				stuffs.append(creatStuff(Name=date,Total=total))
				total=expense.Total_Expenses
				date=str(expense.Time.date())
			if allExpenses[len(allExpenses)-1]==expense:
				stuffs.append(creatStuff(Name=date,Total=total))
				stuffsForMonth.append(creatStuff(Name=year+'-'+month,Total=total1))
		chartdata=chart(stuffs,a="Daily " ,id=1)
		chartdataForMonth=chart(stuffsForMonth,a="Monthly ",id=2)
	return render (request,'expensesView.html',
		{"form":form,"categories":categories, "expenses":allExpenses,"chartdata":chartdata,"chartdataForMonth":chartdataForMonth})

def removeStuff(request,id=None):
	expense=Expenses.objects.get(id=id)
	expense.delete()
	form=addExpensesForm(request.POST or None)
	allExpenses=Expenses.objects.all().order_by("-Time")
	return HttpResponseRedirect('../')
	return render (request,'expensesView.html',{"form":form,"expenses":allExpenses})



def getStuffsByCategory(request,id=None):
	if int(id)==0:
		return HttpResponseRedirect('../')
	else :
		form=addExpensesForm(request.POST or None)
		allExpenses=Expenses.objects.filter(Category_id=id).order_by("-Time")
		# print(allExpenses)
		categories=Category.objects.all().order_by('-Title')
		# print(categories)
		class creatStuff(object):
			def __init__(self, Name=None, Total=None):
				self.Name =Name
				self.Total = Total
		chartdata=''
		chartdataForMonth=''
		if len(allExpenses)>0:
			date=str(allExpenses[0].Time.date())
			stuffs=[]
			stuffsForMonth=[]
			total=0
			total1=0
			parts = str(allExpenses[0].Time.date()).split("-");
			month=parts[1]
			year=parts[0]
			for expense in allExpenses:
				parts = str(expense.Time.date()).split("-");
				if parts[1]==month and parts[0]==year:
					total1+=expense.Total_Expenses
				else :
					stuffsForMonth.append(creatStuff(Name=year+'-'+month,Total=total1))
					total1=expense.Total_Expenses
					month=parts[1]
					year=parts[0]
			
				if str(date)==str(expense.Time.date()):
					total+=expense.Total_Expenses
				else:
					stuffs.append(creatStuff(Name=date,Total=total))
					total=expense.Total_Expenses
					date=str(expense.Time.date())
				if allExpenses[len(allExpenses)-1]==expense:
					stuffs.append(creatStuff(Name=date,Total=total))
					stuffsForMonth.append(creatStuff(Name=year+'-'+month,Total=total1))
			chartdata=chart(stuffs,a="Daily " ,id=1)
			chartdataForMonth=chart(stuffsForMonth,a="Monthly ",id=2)
		return render (request,'expensesView.html',
			{"form":form,"categories":categories, "expenses":allExpenses,"chartdata":chartdata,"chartdataForMonth":chartdataForMonth})

def chart(stuffs=None,a=None,id=None):
    # Chart data is passed to the `dataSource` parameter, as dict, in the form of key-value pairs.
    dataSource = {}
    # setting chart cosmetics
    dataSource['chart'] = { 
      "caption" : a+"Expenses",
        "paletteColors" : "#0075c2",
        "bgColor" : "#ffffff",
        "borderAlpha": "20",
        "canvasBorderAlpha": "0",
        "usePlotGradientColor": "0",
        "plotBorderAlpha": "10",
        "showXAxisLine": "1",
        "xAxisLineColor" : "#999999",
        "showValues" : "0",
        "divlineColor" : "#999999",
        "divLineIsDashed" : "1",
        "showAlternateHGridColor" : "0"
      }
     
      
    dataSource['data'] = []
      # The data for the chart should be in an array wherein each element of the array is a JSON object as
      # `label` and `value` keys.
      # Iterate through the data in `Country` model and insert in to the `dataSource['data']` list.
    for stuff in stuffs:
      data = {}
      data['label'] = stuff.Name
      data['value'] = stuff.Total
      dataSource['data'].append(data)
    if id==1:
    	chartNo='chart-1'
    	ex='ex1'
    if id==2:
    	chartNo='chart-2'
    	ex='ex2'
      # Create an object for the Column 2D chart using the FusionCharts class constructor               
    column2D = FusionCharts("column2D", ex , "600", "400", chartNo, "json", dataSource)
      # returning complete JavaScript and HTML code, which is used to generate chart in the browsers.
    return column2D.render() 
  
  