from django.urls import path
from . import views

urlpatterns = [
    path('', views.dummy, name="mainHome"),
    path('Innovative-Learning/', views.index, name="mainHome"),
    path('contact/', views.contact, name="mainContact"),
    path('courses/', views.courses, name="mainCourses"),
    path('login/', views.user_login, name="mainLogin"),
    path('register/', views.register, name="mainRegister"),
    path('logout/', views.logout, name="logout_me"),
    path('C-Tutorials/', views.c_Tut, name="c_Tut_me"),
    path('Java-Tutorials/', views.java_Tut, name="java_Tut_me"),
    path('Python-Tutorials/', views.python_Tut, name="python_Tut_me"),
    path('D-S-Tutorials/', views.DS_Tut, name="ds_Tut_me"),
    path('Conditional-Practice/', views.Practice_Conditional, name="prac-conditional"),
    path('Loops-Practice/', views.Practice_Loops, name="prac-loops"),
    path('Pointers-Practice/', views.Practice_Pointers, name="prac-pointers"),
    path('Array-Practice/', views.Practice_Array, name="prac-array"),
    path('DS-Practice/', views.Practice_DS, name="prac-ds"),
    path('payments/', views.Payments, name="money"),
]
