from django.contrib import admin
from .models import Niveau_etude, Taux_brut_scolarisation, Ecole, Taux_brut_admission
# Register your models here.

admin.site.register(Niveau_etude)
admin.site.register(Taux_brut_admission)
admin.site.register(Taux_brut_scolarisation)
admin.site.register(Ecole)