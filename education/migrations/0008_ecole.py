# Generated by Django 3.0.5 on 2020-05-18 16:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0007_auto_20200518_1512'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ecole',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100)),
                ('region', models.CharField(max_length=30)),
                ('typeEcole', models.CharField(max_length=20)),
            ],
        ),
    ]
