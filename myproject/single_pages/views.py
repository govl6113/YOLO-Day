from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.models import User # 장고가 주는 User 모델 
from django.contrib import auth



def about_me(request):
    return render(request,'single_pages/about_me.html')
# Create your views here.

def community(request):
    return render(request,'single_pages/community.html')
# Create your views here.

def login1(request):
    return render(request,'single_pages/login.html')


def login(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = auth.authenticate(request, username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return HttpResponseRedirect('/')
        else:
            return render(request, 'single_pages/login.html', {'error':'username or password is incorrect'})
            # 로그인 실패시 'username or password is incorrect' 메시지를 띄움  
    else:
        return render(request, 'single_pages/login.html')

def logout(request):
    auth.logout(request)
    return HttpResponseRedirect('/')

    