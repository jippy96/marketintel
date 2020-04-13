from django.db import models

class demande_potentielle_en_2018_par_region(models.Model):
	region = models.CharField(max_length = 20, unique = True)
	garcon = models.IntegerField(default=0)
	fille = models.IntegerField(default=0)
	total = models.IntegerField(default=0)
	poid_de_la_region = models.FloatField()
	
	# def __str__(self):
	# 	return self.name

class taux_brute_de_scolarisation(models.Model):
	region = models.CharField(max_length = 20, unique = True)
	garcon = models.FloatField()
	fille = models.FloatField()
	total = models.FloatField()
	poid_de_la_region = models.FloatField()
	
	# def __str__(self):
	# 	return self.name

class population_scolarisable(models.Model):
	region = models.CharField(max_length = 20, unique = True)
	garcon = models.IntegerField(default=0)
	fille = models.IntegerField(default=0)
	total = models.IntegerField(default=0)
	pourcent_fille = models.FloatField()
	part_region = models.FloatField()
	
	# def __str__(self):
	# 	return self.title

class repartition_du_taux_brute_de_scolarisation(models.Model):
	region = models.CharField(max_length = 20, unique = True)
	garcon = models.FloatField()
	fille = models.FloatField()
	total = models.FloatField()
	Indice_de_parite = models.FloatField()