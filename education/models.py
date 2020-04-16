from django.db import models

class prescolaire(models.Model):
	region = models.CharField(max_length = 20, unique = True)
	garcon = models.IntegerField(default=0)
	fille = models.IntegerField(default=0)
	total = models.IntegerField(default=0)
	poid_region = models.FloatField()
	pourcent_fille = models.FloatField()
	
	# def __str__(self):
	# 	return self.name

class elementaire(models.Model):
	region = models.CharField(max_length = 20, unique = True)
	garcon = models.IntegerField(default=0)
	fille = models.IntegerField(default=0)
	total = models.IntegerField(default=0)
	poid_region = models.FloatField()
	
	
	# def __str__(self):
	# 	return self.name

class moyen(models.Model):
	region = models.CharField(max_length = 20, unique = True)
	garcon = models.IntegerField(default=0)
	fille = models.IntegerField(default=0)
	total = models.IntegerField(default=0)
	pourcent_fille = models.FloatField()
	part_region = models.FloatField()
	
	# def __str__(self):
	# 	return self.title

class secondaire(models.Model):
	region = models.CharField(max_length = 20, unique = True)
	garcon = models.IntegerField(default=0)
	fille = models.IntegerField(default=0)
	total = models.IntegerField(default=0)
	pourcent_fille = models.FloatField()
	part_region = models.FloatField()