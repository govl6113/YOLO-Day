from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect


def landing(request):
    return render(request, "landing.html")
