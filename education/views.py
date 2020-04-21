from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Niveau_etude, Taux_brut_admission

# Create your views here.


def index(request):
    return render(
        request,
        'education/home.html', {

        }
    )


# méthode qui traite la vue garderie
def garderie(request):

    return render(
        request,
        'education/garderie.html',
    )
# méthode qui traite la vue préscolaire


def prescolaire(request):

    liste = []
    tableau = {}
    # données du taux brut d'admission pour le préscolaire
    if request.GET:

        niveau = 3
        
        if request.GET['niveau'] == "ps":
            niveau = 3
        elif request.GET['niveau'] == "ms":
            niveau = 4
        elif request.GET['niveau'] == "gs":
            niveau = 2

        datas = Taux_brut_admission.objects.filter(niveau_etude=niveau)
        for data in datas:
            tableau = {
                'region': data.region,
                'garcon': data.garcon,
                'fille': data.fille,
                'total': data.total,
                'niveau': data.niveau_etude.nom

            }

            liste.append(tableau)
        tableau = {
            'regions': liste
        }
        return JsonResponse(tableau)

    return render(
        request,
        'education/prescolaire.html', {

        }
    )


# from .models import prescolaire, elementaire, moyen, secondaire

# def pie_chart(request, modele):
#     labels = []
#     data = []

#     queryset = modele.objects.exclude(region="Sénégal")
#     for elem in queryset:
#         labels.append(elem.region)
#         data.append(elem.total)

#     context = {'labels': labels, 'data': data}

#     return render(request, 'chart.html', context)

# def bar_chart(request, modele):
#     labels = []
#     data = []

#     queryset = modele.objects.exclude(region="Sénégal")
#     for elem in queryset:
#         labels.append(elem.region)
#         data.append(elem.total)

#     context = {'labels': labels, 'data': data}

#     return render(request, 'chart.html', context)

# def doughnut_chart(request, modele):
#     labels = []
#     data = []

#     queryset = modele.objects.exclude(region="Sénégal")
#     for elem in queryset:
#         labels.append(elem.region)
#         data.append(elem.total)

#     context = {'labels': labels, 'data': data}

#     return render(request, 'chart.html', context)
