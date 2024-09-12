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
    aadhaar= models.CharField(max_length=12)
    pan= models.CharField(max_length=10)
    custpassword= models.CharField(max_length=20)


    # Account Details
    # date_opened= models.DateField(default=datetime.now)
    # account_id= models.CharField(max_length=8, default="BS11228B")
    # account_type= models.CharField(max_length=20,default="Saving Account")
    # account_no = models.PositiveIntegerField(
    #     unique=True,
    #     validators=[
    #         MinValueValidator(10000000),
    #         MaxValueValidator(99999999)
    #     ]
    # )
    # ifsc_code= models.CharField(max_length=12,default="BSB0011228")
    # account_status= models.CharField(max_length=10,default="Active")


    # Card Details
    # card_no= models.PositiveIntegerField(
    #     unique=True,
    #     validators=[
    #         MinValueValidator(100000000),
    #         MaxValueValidator(999999999)
    #     ]
    # )
    # cvv= models.IntegerField(default=282)
    # expiry= models.CharField(max_length=10, default="12/28")
    # balance = models.DecimalField(
    #     default=500,
    #     max_digits=12,
    #     decimal_places=2
    # )
    # cust_id= models.PositiveIntegerField(
    #     unique=True,
    #     validators=[
    #         MinValueValidator(1000),
    #         MaxValueValidator(9999)
    #     ]
    # )

    def __str__(self):
        return self.fname