from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

from .models import demande_potentielle_en_2018_par_region as demande
from .models import taux_brute_de_scolarisation as taux
from .models import population_scolarisable as scolarisable
from .models import repartition_du_taux_brute_de_scolarisation as repartition


def pie_chart(request):
    labels = []
    data = []

    queryset = demande.objects.exclude(region="Sénégal")
    for elem in queryset:
        labels.append(elem.region)
        data.append(elem.total)

    context = {'labels': labels, 'data': data}

    return render(request, 'pie_chart.html', context)

def modele(request):
	return render(request, 'modele.html', {})

def bar_chart(request):
	pass