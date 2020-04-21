from django.db import models


class Niveau_etude(models.Model):
    
    nom = models.CharField(max_length=50, unique=True, blank=False, null=False)

    def __str__(self):
        return self.nom

# ce modele represente le taux d'admission pour tous les niveaux
class Taux_brut_admission(models.Model):

	region = models.CharField(max_length=30)
	garcon = models.FloatField(default=0)
	fille = models.FloatField(default=0)
	total = models.FloatField(default=0)
	annee = models.IntegerField()
	commentaire = models.TextField(null=True, blank=True)
#  ce champ fait la jointure avec le type de niveau auquel les données appartienent
	niveau_etude = models.ForeignKey(Niveau_etude,on_delete=models.CASCADE)
 
	def __str__(self):
		return self.region

# class elementaire(models.Model):
# 	region = models.CharField(max_length = 20, unique = True)
# 	garcon = models.IntegerField(default=0)
# 	fille = models.IntegerField(default=0)
# 	total = models.IntegerField(default=0)
# 	poid_region = models.FloatField()
	
	
# 	# def __str__(self):
# 	# 	return self.name

# class moyen(models.Model):
# 	region = models.CharField(max_length = 20, unique = True)
# 	garcon = models.IntegerField(default=0)
# 	fille = models.IntegerField(default=0)
# 	total = models.IntegerField(default=0)
# 	pourcent_fille = models.FloatField()
# 	part_region = models.FloatField()
	
# 	# def __str__(self):
# 	# 	return self.title

# class secondaire(models.Model):
# 	region = models.CharField(max_length = 20, unique = True)
# 	garcon = models.IntegerField(default=0)
# 	fille = models.IntegerField(default=0)
# 	total = models.IntegerField(default=0)
# 	pourcent_fille = models.FloatField()
# 	part_region = models.FloatField()
