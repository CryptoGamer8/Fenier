# Generated by Django 3.1.7 on 2021-04-10 04:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reviews',
            name='comments',
            field=models.TextField(verbose_name='comment'),
        ),
    ]
