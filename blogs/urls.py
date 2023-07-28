from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="blogHome"),
    path('tech-blog/', views.tech_blog, name="blogtech"),
    path('gen-blog/', views.gen_blog, name="bloggen"),
    path('music/', views.music, name="music"),
    path('next/', views.next, name="next"),
    path('back/', views.back, name="back"),
    path('suggest/', views.suggest_blog, name="blog_suggest"),
]