# Generated by Django 3.2.1 on 2021-06-05 07:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainpage', '0003_register_user_img'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(default='', max_length=50)),
                ('email', models.CharField(default='', max_length=50)),
                ('mob', models.IntegerField(default=0)),
                ('msg', models.CharField(default='', max_length=50)),
                ('date', models.DateField()),
            ],
        ),
    ]
