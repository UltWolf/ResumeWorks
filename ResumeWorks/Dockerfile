FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-buster AS build
WORKDIR /src
COPY ["ResumeWorks/ResumeWorks.csproj", "ResumeWorks/"]
RUN dotnet restore "ResumeWorks/ResumeWorks.csproj"
COPY . .
WORKDIR "/src/ResumeWorks"
RUN dotnet build "ResumeWorks.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "ResumeWorks.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "ResumeWorks.dll"]