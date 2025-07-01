#!/bin/bash

# Docker management scripts for micro frontend architecture

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

echo_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

echo_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Production build and run
production() {
    echo_info "Building and starting production environment..."
    docker-compose --env-file docker.env.example up --build -d
    echo_info "Production environment started!"
    echo_info "Host app: http://localhost:3000"
    echo_info "Traefik dashboard: http://localhost:8080"
}

# Development build and run
development() {
    echo_info "Starting development environment..."
    docker-compose -f docker-compose.dev.yml --env-file docker.env.example up --build
}

# Stop all services
stop() {
    echo_info "Stopping all services..."
    docker-compose down
    docker-compose -f docker-compose.dev.yml down
    echo_info "All services stopped!"
}

# Clean up (remove containers, images, volumes)
cleanup() {
    echo_warning "This will remove all containers, images, and volumes. Are you sure? (y/N)"
    read -r response
    if [[ "$response" =~ ^([yY][eS]|[yY])$ ]]; then
        echo_info "Cleaning up Docker resources..."
        docker-compose down -v --rmi all
        docker-compose -f docker-compose.dev.yml down -v --rmi all
        docker system prune -f
        echo_info "Cleanup completed!"
    else
        echo_info "Cleanup cancelled."
    fi
}

# Show logs
logs() {
    if [ -z "$1" ]; then
        echo_info "Showing logs for all services..."
        docker-compose logs -f
    else
        echo_info "Showing logs for service: $1"
        docker-compose logs -f "$1"
    fi
}

# Show status
status() {
    echo_info "Showing service status..."
    docker-compose ps
}

# Create new child app structure
create_child_app() {
    if [ -z "$1" ]; then
        echo_error "Please provide a name for the child app: ./scripts/docker-commands.sh create_child_app <app-name>"
        exit 1
    fi
    
    APP_NAME="$1"
    APP_DIR="child-apps/$APP_NAME"
    
    echo_info "Creating child app: $APP_NAME"
    
    mkdir -p "$APP_DIR"
    
    # Create basic structure
    cat > "$APP_DIR/package.json" << EOF
{
  "name": "$APP_NAME",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3001",
    "build": "next build",
    "start": "next start -p 3001",
    "lint": "next lint"
  },
  "dependencies": {
    "@module-federation/nextjs-mf": "latest",
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "typescript": "latest"
  }
}
EOF
    
    echo_info "Child app structure created at $APP_DIR"
    echo_info "Next steps:"
    echo "1. cd $APP_DIR"
    echo "2. npm install"
    echo "3. Configure next.config.js with Module Federation"
    echo "4. Uncomment the service in docker-compose.yml"
}

# Help
help() {
    echo "Micro Frontend Docker Management Scripts"
    echo ""
    echo "Usage: ./scripts/docker-commands.sh <command>"
    echo ""
    echo "Commands:"
    echo "  production              Build and start production environment"
    echo "  development             Start development environment"
    echo "  stop                    Stop all services"
    echo "  cleanup                 Remove all containers, images, and volumes"
    echo "  logs [service]          Show logs (all services or specific service)"
    echo "  status                  Show service status"
    echo "  create_child_app <name> Create new child app structure"
    echo "  help                    Show this help message"
}

# Main script logic
case "$1" in
    production|prod)
        production
        ;;
    development|dev)
        development
        ;;
    stop)
        stop
        ;;
    cleanup|clean)
        cleanup
        ;;
    logs)
        logs "$2"
        ;;
    status)
        status
        ;;
    create_child_app|create)
        create_child_app "$2"
        ;;
    help|--help|-h)
        help
        ;;
    *)
        echo_error "Unknown command: $1"
        help
        exit 1
        ;;
esac 
