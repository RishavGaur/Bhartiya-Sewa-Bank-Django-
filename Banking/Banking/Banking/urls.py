"""
URL configuration for Banking project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from BSB.views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', home, name="home"),
    path('logout/', logoutPage, name="logout"),
    path('saving/', saving, name="saving"),
    path('current/', current, name="current"),
    path('eservices/', eservices, name="eservices"),
    path('about/', about, name="about"),
    path('adminLogin/', admin_login, name="admin_login"),
    path('userLogin/', user_login, name="user_login"),
    path('success/', success, name="success"),
    path('forgetPass/', forget_pass, name="forget_pass"),
    path('createAc/', create_ac, name="create_ac"),
    path('terms/', termsConditions, name="termsConditions"),
    path('customer/', customerCorner, name="customerCorner"),

    # Now Users Module

    path('dashboard/', dashboard, name="dashboard"),
    path('payment/', payment, name="payment"),
    path('transaction/', transaction, name="transaction"),
    path('myAccount/', myAccount, name="myAccount"),
    path('help/', help, name="help"),
    path('myProfile/', myProfile, name="profile"),
    path('editProfile/', editProfile, name="profile"),
    path('notification/', notification, name="notification"),
    path('admin/', admin.site.urls),

    # Now Admin Module

    path('index/', index, name="index"),
    path('CreateAccount/', newAc, name="newAc"),
    path('UpdateAccount/', updateAc, name="updateAc"),
    path('DeleteAccount/', deleteAc, name="deleteAc"),
    path('adminNotifications/', adminNotify, name="adminNotify"),
    path('admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns+=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)