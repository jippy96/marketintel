# Generated by Django 3.1.dev20200401125511 on 2020-04-20 10:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Niveau_etude',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=50, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Taux_brut_admission',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('region', models.CharField(max_length=30, unique=True)),
                ('garcon', models.IntegerField(default=0)),
                ('fille', models.IntegerField(default=0)),
                ('total', models.IntegerField(default=0)),
                ('annee', models.IntegerField()),
                ('commentaire', models.TextField(blank=True, null=True)),
                ('niveau_etude', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='education.niveau_etude')),
            ],
        ),
        migrations.DeleteModel(
            name='elementaire',
        ),
        migrations.DeleteModel(
            name='moyen',
        ),
        migrations.DeleteModel(
            name='prescolaire',
        ),
        migrations.DeleteModel(
            name='secondaire',
        ),
    ]
