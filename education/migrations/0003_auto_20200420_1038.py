# Generated by Django 3.1.dev20200401125511 on 2020-04-20 10:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0002_auto_20200420_1010'),
    ]

    operations = [
        migrations.AlterField(
            model_name='taux_brut_admission',
            name='fille',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='taux_brut_admission',
            name='garcon',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='taux_brut_admission',
            name='total',
            field=models.FloatField(default=0),
        ),
    ]
