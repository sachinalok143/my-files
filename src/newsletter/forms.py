from django import forms
from .models import *
from django.utils.translation import ugettext_lazy as _
# class ContactForm(forms.Form):
# 	full_name=forms.CharField(required=False)
# 	email=forms.EmailField()
# 	message=forms.CharField()
	

# class signUpForm(forms.ModelForm):
# 	class Meta:
# 		model=signUp
# 		fields=['email',"full_name"]
	
# 	def clean_email(self):
# 		# print (self.cleaned_data)
# 		email=self.cleaned_data.get("email")
# 		email_base,provider=email.split("@")
# 		domain,extention=provider.split(".")
# 		if not extention == "com":
# 			raise forms.ValidationError("Please use a valid .com email address!")
# 		return email

# 	def clean_fulll_name(self):
# 		full_name=self.cleaned_data.get("full_name")
# 		#put validation code here
# 		return full_name

# class itemDetailForm(forms.ModelForm):
# 	class Meta:
# 		model=itemDetail
# 		fields=["item_name"]
# 	def clean_fulll_name(self):
# 		item_name=self.cleaned_data.get("item_name")
# 		#put validation code here
# 		return item_name

class categoryForm(forms.ModelForm):
	class Meta:
		model=Category
		fields=["Title"]
	def clean_Title(self):
		Title=self.cleaned_data.get("Title")
		categories=Category.objects.filter(Title=Title)
		if categories.count()>0:
			raise forms.ValidationError(" Category already exists.")
		return Title
class addExpensesForm(forms.ModelForm):
	class Meta:
		model=Expenses
		fields=["Stuff_Name","Price_Per_Piece","No_Of_Stuffs","Category","Time"]
		labels = {
            "Time": _("Time (YYYY-MM-DD HH:MM:SS)"),
        };
        # placeholers = { 
        #     "Time": _("Time (YYYY-MM-DD HH:MM:SS)"),

        # }
	def clean(self):
		Stuff_Name=self.cleaned_data.get("Stuff_Name")
		Price_Per_Piece=self.cleaned_data.get("Price_Per_Piece")
		No_Of_Stuffs=self.cleaned_data.get("No_Of_Stuffs")
		# Category=self.cleaned_data.get("Category")
		Time=self.cleaned_data.get("Time")
		stuffs=Expenses.objects.filter(Stuff_Name=Stuff_Name,Price_Per_Piece=Price_Per_Piece,Category=Category,Time=Time)
		if stuffs.count()>0:
			raise forms.ValidationError(" You are entering a duplicate entry .You can increament the count if .")
		if not Price_Per_Piece:
			raise forms.ValidationError('Enter Some price')
		if not No_Of_Stuffs:
			raise forms.ValidationError('Enter Some number of stuffs you purchage')
		if not Time:
			raise forms.ValidationError('Enter Time of Purchage')
		# return Title