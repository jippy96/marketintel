# Generated by Django 3.1.dev20200401125511 on 2020-04-27 12:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0005_taux_brut_scolarisation'),
    ]

    operations = [
        migrations.AddField(
            model_name='taux_brut_scolarisation',
            name='annee',
            field=models.IntegerField(default=2020),
        ),
        migrations.AlterField(
            model_name='taux_brut_admission',
            name='annee',
            field=models.IntegerField(default=2020),
        ),
    ]