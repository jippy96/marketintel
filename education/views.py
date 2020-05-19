from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Niveau_etude, Taux_brut_admission, Taux_brut_scolarisation
import datetime


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


def prescolaire(request, year=datetime.datetime.now().year):

    liste = []
    tableau = {}

    # données du taux brut d'admission pour le préscolaire
    if request.GET:

        if request.GET['type'] == 'TBA':
            niveau = 3

            if request.GET['niveau'] == "ps":
                niveau = 3
            elif request.GET['niveau'] == "ms":
                niveau = 4
            elif request.GET['niveau'] == "gs":
                niveau = 2

            datas = Taux_brut_admission.objects.filter(
                niveau_etude=niveau, annee=year).exclude(region="Sénégal")
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

        elif request.GET['type'] == "PRESCOLARISATION":
            datas = Taux_brut_scolarisation.objects.filter(
                niveau_etude=1,
                annee=year
            ).exclude(region="Sénégal")
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

        else:
            pass

    annees = []
    for x in range(2010, 2021, 1):
        annees.append(x)

    return render(
        request,
        'education/prescolaire.html', {
            'annees': annees,
            'current_year': year,
        }
    )


def elementaire(request, year=datetime.datetime.now().year):

    if request.is_ajax():

        liste = []
        tableau = {}

        datas = Taux_brut_scolarisation.objects.filter(
            niveau_etude=2,
            annee=year,
        )
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

    annees = []
    for x in range(2010, 2021, 1):
        annees.append(x)
        
    context = {
        'current_year': year,
        'annees':annees
    }
    return render(request, 'education/elementaire.html', context)


def moyen(request):
    return render(request, 'education/moyen.html')

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
