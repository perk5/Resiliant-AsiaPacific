from django.shortcuts import render
from django.http import HttpResponse
from .models import Client


def index(request):
    clientName = Client.objects.all()
    return render(request, 'index.html', {'name': clientName})


def aboutUs(request):
    return render(request, 'about-us.html')


def service1(request):
    return render(request, 'services-1.html')

