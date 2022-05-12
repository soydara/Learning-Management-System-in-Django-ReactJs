from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import permissions
from .serializers import TeacherSerializer
from . import models

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


# class TeacherList(APIView):
#     def get(self, request):
#         teachers = models.Teacher.objects.all()
#         serializer = TeacherSerializer(teachers, many=True)
#         return Response(serializer.data)

class TeacherList(generics.ListCreateAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer


class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
