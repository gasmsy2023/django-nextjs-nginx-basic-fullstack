from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class HelloWorldView(APIView):
    def get(self, request):
        return Response({"message": "Hello World"})

class HealthCheckView(APIView):
    def get(self, request):
        return Response({"status": "healthy"}, status=status.HTTP_200_OK)