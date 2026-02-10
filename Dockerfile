FROM nginx:alpine

# Supprimer la conf par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Copier notre conf nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier le build Astro
COPY dist/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
