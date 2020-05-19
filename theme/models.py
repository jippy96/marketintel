from django.db import models
from random import randint

# Create your models here.
class Theme(models.Model):
    
    numero = models.IntegerField(default=randint(1000,30000), unique=True)
    nom = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100,unique=True, blank=True, null=True)
    
    def __str__(self):
        return self.nom