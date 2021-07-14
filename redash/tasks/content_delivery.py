from logging import log
from redash.worker import get_job_logger

logger = get_job_logger(__name__)

def send_data():
    logger.info('Sending Data to 3rd Party Services.....')