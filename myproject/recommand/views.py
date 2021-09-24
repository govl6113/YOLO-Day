from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect

# Create your views here.
def landing(request):
    return render(request, 'landing.html')