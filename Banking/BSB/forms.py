from django import forms
from .models import BankUsersModel


# creating a form
class BankUsersForm(forms.ModelForm):

	# create meta class
	class Meta:
		# specify model to be used
		model = BankUsersModel

		# specify fields to be used
		fields = [
			"fname",
			"lname",
			"gend",
			"birdate",
			"birmonth",
			"biryear",
			"custaddress",
			"custpincode",
			"phone",
			"custmail",
			"aadhaar",
			"pan",
			"custpassword",

			# Account Details
			# "date_opened",
			# "account_id"
			# "account_type",
			# "account_no",
			# "ifsc_code",
			# "account_status",

			# Card Details
			# "card_no",
			# "cvv",
			# "expiry",
			# "balance",
			# "pan",
			# "cust_id"
		]
