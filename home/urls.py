from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='home'),
    path('about-us/', views.aboutUs, name='aboutUs'),
    path('service-1/', views.service1, name='service1'),
    path('partner-1/',  views.partner1, name='partner1'),
    path('contact-us/', views.contactus, name='contact')

]

