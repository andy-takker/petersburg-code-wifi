from fastapi import FastAPI, HTTPException
from fastapi_pagination import add_pagination
from starlette.middleware.cors import CORSMiddleware

from config import get_settings
from api.routers import wifi_router
from errors import http_exception_handler
from middleware import VKValidationMiddleware

settings = get_settings()


def get_application() -> FastAPI:
    """App Factory"""
    application = FastAPI(
        title=settings.PROJECT_NAME,
        debug=settings.DEBUG,
        version=settings.VERSION,
        description='Код Петербурга',
        docs_url=f'/{settings.API_DOC_PREFIX}/docs',
        redoc_url=f'/{settings.API_DOC_PREFIX}/redoc',
        openapi_url=f'/{settings.API_DOC_PREFIX}/openapi.json',
    )
    application.add_middleware(
        CORSMiddleware,
        allow_origins=settings.ALLOWED_HOSTS or ['*'],
        allow_credentials=True,
        allow_methods=['*'],
        allow_headers=['*'],
    )
    application.add_middleware(
        VKValidationMiddleware,
        client_secret=settings.VK_CLIENT_SECRET,
        debug=settings.DEBUG,
        api_doc_prefix=settings.API_DOC_PREFIX,
    )
    application.add_exception_handler(
        exc_class_or_status_code=HTTPException,
        handler=http_exception_handler,
    )

    application.include_router(wifi_router)
    add_pagination(application)
    return application


app = get_application()
