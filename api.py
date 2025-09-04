from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from sqlalchemy import create_engine
import json

# --- ETAPA 1: CONEXÃO COM O BANCO DE DADOS ---
db_password = '982108' # Sua senha
connection_string = f'postgresql://postgres:{db_password}@localhost:5432/postgres'

try:
    engine = create_engine(connection_string)
    print("✅ Backend conectado ao PostgreSQL.")
except Exception as e:
    print(f"❌ Erro de conexão no backend: {e}")
    exit()

# --- ETAPA 2: CRIAÇÃO DO SERVIDOR DA API ---
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Permite que seu frontend acesse a API
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- ETAPA 3: LÓGICA DA ANÁLISE (ENDPOINT) ---
@app.get("/api/vendas-por-categoria")
def get_vendas_por_categoria():
    # Sua consulta SQL, corrigida para o banco de dados que criamos
    sql_query = """
        SELECT
            p.category AS categoria,
            SUM(t.total) AS total_vendas
        FROM
            analytics.transactions AS t
        JOIN
            analytics.products AS p ON t.product_id = p.product_id
        WHERE
            t.status = 'delivered'
        GROUP BY
            p.category
        ORDER BY
            total_vendas DESC;
    """
    df = pd.read_sql(sql_query, engine)
    return json.loads(df.to_json(orient='records'))