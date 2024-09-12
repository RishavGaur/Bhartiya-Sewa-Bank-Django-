from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from .models import BankUsersModel
from .forms import BankUsersForm

# Create your views here.
def home(request):
    context= {'page':'Bhartiya Sewa Bank'}
    return render(request,"home.html",context)

def about(request):
    context= {'page':'About Us'}
    return render(request,"about-us.html",context)

def saving(request):
    context= {'page':'Saving Account'}
    return render(request,"saving-account.html",context)

def current(request):
    context= {'page':'Current Account'}
    return render(request,"current-account.html",context)

def eservices(request):
    context= {'page':'E-Services'}
    return render(request,"e-services.html",context)

def admin_login(request):
    context= {'page':'Admin Login'}
    return render(request,"form/admin-login.html",context)


def user_login(request):
    if request.method=='POST':
        email=request.POST.get('logmail')
        password=request.POST.get('logpassword')
        user_exist=BankUsersModel.objects.get(custmail=email)
        
        
        if user_exist and user_exist.custpassword==password:
            return redirect(f'/dashboard/{email}/')
        else:
            return HttpResponse("Username or Password is incorrect!!!")

    context= {'page':'User Login'}
    return render(request,"form/user-login.html",context)


# User Logout
def logoutPage(request):
    logout(request)
    return redirect('home')

def forget_pass(request):
    context= {'page':'Forget Password'}
    return render(request,"form/forget-password.html",context)


# Account Creation

def create_ac(request):
    context ={}
 
    # add the dictionary during initialization
    form = BankUsersForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('success')
         
    context['form']= form
    return render(request,"form/create-ac.html",context)

def success(request):
    context= {'page':'Account Successfully Created'}
    return render(request,"include/success.html",context)
def termsConditions(request):
    context= {'page':'Terms and Conditions'}
    return render(request,"pages/terms-conditions.html",context)
def customerCorner(request):
    context= {'page':'Customer Queries'}
    return render(request,"pages/customer-corner.html",context)

# Now Authorized users pages

# @login_required(login_url='user_login')
def dashboard(request,email):
    user=BankUsersModel.objects.get(custmail=email)
    context= {'page':'BSB User','user':user}
    redirect(f'/dashboard/{email}/')
    return render(request,"user/dashboard.html",context)
def payment(request):
    context= {'page':'Online Payment'}
    return render(request,"user/payment.html",context)
def transaction(request):
    context= {'page':'Transactions History'}
    return render(request,"user/transactions.html",context)
def myAccount(request):
    context= {'page':'Account Information'}
    return render(request,"user/myAccount.html",context)
def help(request):
    context= {'page':'Help Center'}
    return render(request,"user/help.html",context)
def myProfile(request):
    context= {'page':'My Profile'}
    return render(request,"user/myProfile.html",context)
def editProfile(request):
    context= {'page':'Edit Profile'}
    return render(request,"user/editProfile.html",context)
def notification(request):
    context= {'page':'Notifications'}
    return render(request,"user/notification.html",context)


# Now Admin pages

def index(request):
    context= {'page':'Admin Controls'}
    return render(request,"adminBnk/index.html",context)
def newAc(request):
    context= {'page':'Create New Account'}
    return render(request,"adminBnk/new-ac.html",context)
def updateAc(request):
    context= {'page':'Update Account'}
    return render(request,"adminBnk/update-ac.html",context)
def deleteAc(request):
    context= {'page':'Delete Account'}
    return render(request,"adminBnk/delete-ac.html",context)
def adminNotify(request):
    context= {'page':'Notifications'}
    return render(request,"adminBnk/notification.html",context)
def adminProfile(request):
    context= {'page':'My Profile'}
    return render(request,"adminBnk/myProfile.html",context)
# Create your views here.
