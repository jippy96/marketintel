# Generated by Django 3.1.dev20200401125511 on 2020-04-21 00:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0003_auto_20200420_1038'),
    ]

    operations = [
        migrations.AlterField(
            model_name='taux_brut_admission',
            name='region',
            field=models.CharField(max_length=30),
        ),
    ]