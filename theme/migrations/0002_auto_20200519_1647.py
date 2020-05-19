# Generated by Django 3.0.5 on 2020-05-19 16:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('theme', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='theme',
            name='slug',
            field=models.SlugField(blank=True, max_length=100, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='theme',
            name='numero',
            field=models.IntegerField(default=26547, unique=True),
        ),
    ]
