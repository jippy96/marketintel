# Generated by Django 3.0.5 on 2020-05-19 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Theme',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numero', models.IntegerField(default=21869, unique=True)),
                ('nom', models.CharField(max_length=100)),
            ],
        ),
    ]
