"""
	Don't forget to create the html page.

"""

from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

from .models import prescolaire, elementaire, moyen, secondaire

def pie_chart(request, modele):
    labels = []
    data = []

    queryset = modele.objects.exclude(region="Sénégal")
    for elem in queryset:
        labels.append(elem.region)
        data.append(elem.total)

    context = {'labels': labels, 'data': data}

    return render(request, 'chart.html', context)

def bar_chart(request, modele):
    labels = []
    data = []

    queryset = modele.objects.exclude(region="Sénégal")
    for elem in queryset:
        labels.append(elem.region)
        data.append(elem.total)

    context = {'labels': labels, 'data': data}

    return render(request, 'chart.html', context)

def doughnut_chart(request, modele):
    labels = []
    data = []

    queryset = modele.objects.exclude(region="Sénégal")
    for elem in queryset:
        labels.append(elem.region)
        data.append(elem.total)

    context = {'labels': labels, 'data': data}

    return render(request, 'chart.html', context)