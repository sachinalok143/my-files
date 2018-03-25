from django.db import models
import datetime

# Create your models here.

# class signUp(models.Model):
# 	email=models.EmailField()
# 	full_name=models.CharField(max_length=120,blank=True,null=True)
# 	timestamp=models.DateTimeField(auto_now_add=True,auto_now=False)
# 	updated=models.DateTimeField(auto_now_add=False,auto_now=True)

# 	def __str__ (self): #	python 3.3 is __str__
# 		return self.email

# class itemDetail(models.Model):
# 	# email=models.EmailField()
# 	item_name=models.CharField(max_length=120,blank=False,null=False)
# 	timestamp=models.DateTimeField(auto_now_add=True,auto_now=False)
# 	updated=models.DateTimeField(auto_now_add=False,auto_now=True)

# 	def __str__ (self): #	python 3.3 is __str__
# 		return self.item_name


class Category(models.Model):
	Title=models.CharField(max_length=120,blank=False,null=False)
	Created_at=models.DateTimeField(auto_now_add=True,auto_now=False)
	Updated_at=models.DateTimeField(auto_now_add=False,auto_now=True)
	def __str__ (self): #	python 3.3 is __str__
		return self.Title


class Expenses(models.Model):
	Stuff_Name=models.CharField(max_length=120,blank=False,null=False)
	No_Of_Stuffs=models.IntegerField(default=0)
	Category=models.ForeignKey(Category)
	Time=models.DateTimeField(blank=True)
	Price_Per_Piece=models.IntegerField(default=0)
	Total_Expenses=models.IntegerField(default=0)
	Created_at=models.DateTimeField(auto_now_add=True,auto_now=False)
	Updated_at=models.DateTimeField(auto_now_add=False,auto_now=True)
	# @property
	# def _get_year(self):
	# 	return self.Time.strftime("%Y-%m")
	# year = property(_get_year)
	# def getyear(self):
	# 	return self.year
	# def __str__(self):
	# 	return self.Stuff_Name

