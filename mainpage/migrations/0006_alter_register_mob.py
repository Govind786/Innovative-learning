# Generated by Django 3.2.1 on 2021-06-09 12:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainpage', '0005_remove_register_user_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='register',
            name='mob',
            field=models.IntegerField(default=0, null=True),
        ),
    ]