from django.db import models
from django.core.validators import (
    MinValueValidator,
    MaxValueValidator,
    RegexValidator,
)
from datetime import datetime

# Create your models here.
class BankUsersModel(models.Model):
    fname= models.CharField(max_length=20)
    lname= models.CharField(max_length=20)
    gend= models.CharField(max_length=8)
    birdate= models.IntegerField(default=0)
    birmonth= models.CharField(max_length=10)
    biryear= models.IntegerField(default=0)
    custaddress= models.TextField()
    custpincode= models.IntegerField(default=0)
    phone= models.CharField(max_length=10)
    custmail= models.EmailField(unique=True)
    aadhaar= models.CharField(max_length=12,unique=True)
    pan= models.CharField(max_length=10,unique=True)
    custpassword= models.CharField(max_length=20)

    def __str__(self):
        return self.fname