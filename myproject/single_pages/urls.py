from django.urls import path
from . import views
from . import views as single_pages

urlpatterns = [

    path('about_me/', views.about_me),
    path('', views.landing),
    path('login/', single_pages.login, name="login"),
    path('logout/', single_pages.logout, name="logout"),
    
]