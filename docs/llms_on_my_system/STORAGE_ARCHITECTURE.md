# 📁 LLM Storage Architecture & Best Practices

## 🎯 Recommended Directory Structure

```
C:\Users\brand\Development\
├── LLM_Workspace\              # 🏠 Main LLM hub (NEW)
│   ├── models\                 # Model storage
│   │   ├── gguf\              # Quantized models for Ollama/LM Studio
│   │   ├── huggingface\       # Full precision models
│   │   ├── fine-tuned\        # Your custom models
│   │   └── embeddings\        # Embedding models
│   │
│   ├── environments\           # Python virtual environments
│   │   ├── llm-main\         # Main LLM environment
│   │   ├── llm-dev\          # Development/testing
│   │   └── llm-prod\         # Production environment
│   │
│   ├── projects\              # LLM projects
│   │   ├── chatbots\         # Chat applications
│   │   ├── rag-systems\      # RAG implementations
│   │   ├── agents\           # Agent-based systems
│   │   └── experiments\      # Testing & research
│   │
│   ├── data\                  # Datasets and documents
│   │   ├── training\         # Training datasets
│   │   ├── vector-stores\    # ChromaDB/FAISS databases
│   │   ├── documents\        # Source documents for RAG
│   │   └── cache\           # Temporary cache
│   │
│   ├── configs\               # Configuration files
│   │   ├── model-configs\    # Model settings
│   │   ├── api-keys\        # API credentials (git-ignored)
│   │   └── prompts\         # Prompt templates
│   │
│   └── tools\                 # Utilities and scripts
│       ├── scripts\          # Helper scripts
│       ├── notebooks\        # Jupyter notebooks
│       └── benchmarks\       # Performance tests
```

## 🚀 Storage Locations by Component

### 1. **Models** (~50-100GB)
```yaml
Ollama Models:
  Default: C:\Users\brand\.ollama\models\
  Recommended: C:\Users\brand\Development\LLM_Workspace\models\ollama\

LM Studio Models:
  Default: C:\Users\brand\.cache\lm-studio\models\
  Recommended: C:\Users\brand\Development\LLM_Workspace\models\lmstudio\

Hugging Face Cache:
  Current: C:\Users\brand\.cache\huggingface\
  Keep as-is: Already 38GB invested here
  Symlink to: Development\LLM_Workspace\models\huggingface\
```

### 2. **Python Environments** (~5-10GB per env)
```yaml
Location: C:\Users\brand\Development\LLM_Workspace\environments\
Why: Isolated dependencies for different projects
```

### 3. **Vector Databases** (~1-50GB depending on usage)
```yaml
ChromaDB:
  Default: C:\Users\brand\.cache\chroma\
  Recommended: C:\Users\brand\Development\LLM_Workspace\data\vector-stores\chroma\

FAISS Indexes:
  Recommended: C:\Users\brand\Development\LLM_Workspace\data\vector-stores\faiss\
```

## 📋 Setup Commands

### Step 1: Create Directory Structure
```bash
# Create main structure
mkdir C:\Users\brand\Development\LLM_Workspace
cd C:\Users\brand\Development\LLM_Workspace

# Create all subdirectories
mkdir models models\gguf models\huggingface models\fine-tuned models\embeddings
mkdir environments environments\llm-main environments\llm-dev environments\llm-prod
mkdir projects projects\chatbots projects\rag-systems projects\agents projects\experiments
mkdir data data\training data\vector-stores data\documents data\cache
mkdir configs configs\model-configs configs\api-keys configs\prompts
mkdir tools tools\scripts tools\notebooks tools\benchmarks
```

### Step 2: Set Environment Variables
```bash
# Add to System Environment Variables
setx OLLAMA_MODELS "C:\Users\brand\Development\LLM_Workspace\models\ollama"
setx LM_STUDIO_MODELS "C:\Users\brand\Development\LLM_Workspace\models\lmstudio"
setx TRANSFORMERS_CACHE "C:\Users\brand\.cache\huggingface"
setx HF_HOME "C:\Users\brand\.cache\huggingface"
setx CHROMA_DB_PATH "C:\Users\brand\Development\LLM_Workspace\data\vector-stores\chroma"
setx LLM_WORKSPACE "C:\Users\brand\Development\LLM_Workspace"
```

### Step 3: Configure Ollama to Use Custom Path
```bash
# Windows: Set OLLAMA_MODELS environment variable
setx OLLAMA_MODELS "C:\Users\brand\Development\LLM_Workspace\models\ollama"

# Restart Ollama service
ollama serve
```

### Step 4: Configure LM Studio
```
In LM Studio:
1. Settings → Models Directory
2. Change to: C:\Users\brand\Development\LLM_Workspace\models\lmstudio
3. Apply and restart
```

### Step 5: Create Python Virtual Environment
```bash
cd C:\Users\brand\Development\LLM_Workspace\environments

# Create main environment
python -m venv llm-main

# Activate it
llm-main\Scripts\activate

# Install all packages (use your install script)
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
pip install transformers accelerate bitsandbytes langchain chromadb
# ... rest of packages
```

## 🔗 Symlinks for Existing Data (Advanced)

### Keep existing Hugging Face models, but link them:
```bash
# Run as Administrator in Command Prompt
mklink /D "C:\Users\brand\Development\LLM_Workspace\models\huggingface" "C:\Users\brand\.cache\huggingface\hub"
```

### Link existing Chroma database:
```bash
mklink /D "C:\Users\brand\Development\LLM_Workspace\data\vector-stores\chroma-existing" "C:\Users\brand\.cache\chroma"
```

## 💾 Storage Estimates & Management

### Current Usage:
- **Hugging Face Cache**: 38GB (keep in place)
- **New Ollama Models**: ~30GB
- **LM Studio Models**: ~20GB
- **Python Environments**: ~15GB (3 envs)
- **Projects & Data**: ~10GB
- **Total**: ~113GB

### Storage Tips:
1. **SSD Required**: Keep all models on SSD for performance
2. **Regular Cleanup**: Delete unused models with `ollama rm model-name`
3. **Compression**: Use GGUF quantized models (4-bit) to save 75% space
4. **External Drive**: Consider external SSD for archived models

## 🎯 Why This Structure?

### Benefits:
1. **Organized**: Everything LLM-related in one place
2. **Portable**: Easy to backup/move entire workspace
3. **Isolated**: Virtual environments prevent conflicts
4. **Scalable**: Room to grow with more models/projects
5. **Git-friendly**: Configs and projects can be versioned
6. **Performance**: Models on fast storage, close together

### Version Control:
```gitignore
# .gitignore for LLM_Workspace
models/
data/vector-stores/
data/cache/
environments/
configs/api-keys/
*.bin
*.gguf
*.safetensors
__pycache__/
.env
```

## 📊 Disk Space Management

### Monitor Usage:
```bash
# Check total LLM workspace size
dir "C:\Users\brand\Development\LLM_Workspace" /s

# Check model sizes
dir "C:\Users\brand\Development\LLM_Workspace\models" /s

# List Ollama models
ollama list
```

### Cleanup Commands:
```bash
# Remove unused Ollama models
ollama rm model-name

# Clear Hugging Face cache
huggingface-cli delete-cache

# Clear pip cache
pip cache purge

# Clear ChromaDB old data
# (manually review before deleting)
```

## 🚀 Quick Start After Setup

```bash
# 1. Navigate to workspace
cd C:\Users\brand\Development\LLM_Workspace

# 2. Activate environment
environments\llm-main\Scripts\activate

# 3. Start working
cd projects\chatbots
python my_chatbot.py

# 4. Or launch Jupyter
jupyter lab
```

## 📝 Backup Strategy

### What to Backup:
- ✅ `configs/` - All configurations
- ✅ `projects/` - Your code
- ✅ `models/fine-tuned/` - Custom models
- ✅ `data/vector-stores/` - Processed data
- ⚠️ `models/gguf/` - Optional (can re-download)
- ❌ `environments/` - Can recreate from requirements.txt
- ❌ `data/cache/` - Temporary files

### Backup Command:
```bash
# Create backup (excluding large models)
robocopy C:\Users\brand\Development\LLM_Workspace D:\Backup\LLM_Workspace /E /XD models\gguf models\huggingface environments data\cache
```

## ✅ Final Checklist

- [ ] Create LLM_Workspace directory structure
- [ ] Set environment variables
- [ ] Configure Ollama custom path
- [ ] Configure LM Studio path
- [ ] Create Python virtual environment
- [ ] Install all packages in venv
- [ ] Move/download models to new locations
- [ ] Create first test project
- [ ] Set up .gitignore
- [ ] Document API keys location

---

**Result**: Clean, organized, professional LLM development environment that scales with your needs!