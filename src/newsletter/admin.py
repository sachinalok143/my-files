from django.contrib import admin

from .forms import *
from .models import *
# from SomeOtherAppp import SomeOtherModel


# Register your models here.
class CategoryAdmin(admin.ModelAdmin):
	list_display=["id","Title","Created_at","Updated_at"]
	form=categoryForm
	class meta:
		model=Category

class ExpensesAdmin(admin.ModelAdmin):
	list_display=["id","Stuff_Name","Category","Time","Price_Per_Piece","Total_Expenses","No_Of_Stuffs","Created_at","Updated_at"]
	form=addExpensesForm
	class meta:
		model=Expenses
		
# admin.site.register(signUp,signUpAdmin)
admin.site.register(Expenses,ExpensesAdmin)
admin.site.register(Category,CategoryAdmin)
# admin.site.register(itemDetail,itemDetailAdmin)

