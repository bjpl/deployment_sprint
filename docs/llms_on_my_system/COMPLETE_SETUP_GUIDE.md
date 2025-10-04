# 🚀 Complete LLM Setup Guide - RTX 2000 Ada System
**Total Time: ~2-3 hours | Storage Needed: ~50GB additional**

## Phase 0: Workspace Setup (10 minutes)

### Step 0.1: Create LLM Workspace Structure
```bash
# Run the workspace setup script first
cd C:\Users\brand\Development\Project_Workspace\active-development\llms_on_my_system\scripts
setup_llm_workspace.bat

# This creates:
# C:\Users\brand\Development\LLM_Workspace\
#   ├── models\        # All your AI models
#   ├── environments\  # Python virtual environments
#   ├── projects\      # Your LLM projects
#   ├── data\          # Datasets & vector stores
#   ├── configs\       # Configuration files
#   └── tools\         # Scripts & utilities
```

### Step 0.2: Navigate to Workspace
```bash
cd C:\Users\brand\Development\LLM_Workspace
```

## Phase 1: GPU/CUDA Setup (15 minutes)

### Step 1.1: Check Current CUDA Status
```bash
# Check if CUDA is already working
python -c "import torch; print(f'CUDA Available: {torch.cuda.is_available()}')"
python -c "import torch; print(f'PyTorch Version: {torch.__version__}')"
python -c "import torch; print(f'CUDA Version: {torch.version.cuda}')"
python -c "import torch; print(f'GPU: {torch.cuda.get_device_name(0) if torch.cuda.is_available() else None}')"
```

### Step 1.2: Install NVIDIA CUDA Toolkit (if needed)
```bash
# Only if CUDA not detected above
# Download CUDA 12.1 from: https://developer.nvidia.com/cuda-12-1-0-download-archive
# Select: Windows > x86_64 > 11 > exe (local)
# Run installer with default options

# After installation, verify:
nvcc --version
nvidia-smi
```

### Step 1.3: Install/Update PyTorch with CUDA
```bash
# Uninstall CPU-only version if present
pip uninstall torch torchvision torchaudio -y

# Install CUDA-enabled PyTorch
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121

# Verify GPU is detected
python -c "import torch; assert torch.cuda.is_available(), 'CUDA not available!'; print('✅ CUDA Ready!')"
```

## Phase 2: Core LLM Libraries (20 minutes)

### Step 2.0: Create and Activate Virtual Environment
```bash
# Navigate to workspace
cd C:\Users\brand\Development\LLM_Workspace

# Create virtual environment
python -m venv environments\llm-main

# Activate it
environments\llm-main\Scripts\activate

# Verify correct Python
where python
# Should show: C:\Users\brand\Development\LLM_Workspace\environments\llm-main\Scripts\python.exe
```

### Step 2.1: Essential Transformer Libraries
```bash
# Core libraries for running models
pip install transformers==4.36.2
pip install accelerate==0.25.0
pip install bitsandbytes==0.41.3  # For model quantization
pip install safetensors==0.4.1
pip install sentencepiece==0.1.99  # Tokenizer for many models
pip install protobuf==3.20.3
```

### Step 2.2: Model Loading Optimizations
```bash
# GPU memory optimization
pip install xformers==0.0.23  # Efficient attention mechanisms
pip install triton==2.1.0  # GPU kernel compiler
pip install einops==0.7.0  # Tensor operations
pip install scipy==1.11.4  # Scientific computing
```

### Step 2.3: Quantization Support
```bash
# For loading quantized models efficiently
pip install auto-gptq==0.5.1  # GPTQ quantization
pip install optimum==1.16.0  # Hugging Face optimization library
pip install peft==0.7.1  # Parameter-efficient fine-tuning
```

## Phase 3: LangChain & RAG Stack (15 minutes)

### Step 3.1: LangChain Ecosystem
```bash
# Complete LangChain installation
pip install langchain==0.1.0
pip install langchain-community==0.0.10
pip install langchain-experimental==0.0.47
pip install langsmith==0.0.77  # For debugging chains
```

### Step 3.2: Vector Databases
```bash
# ChromaDB for vector storage
pip install chromadb==0.4.22

# Alternative vector stores
pip install faiss-cpu==1.7.4  # Facebook's similarity search
pip install qdrant-client==1.7.0  # Qdrant vector database
```

### Step 3.3: Embeddings & Retrievers
```bash
# Embedding models
pip install sentence-transformers==2.2.2
pip install InstructorEmbedding==1.0.1

# Document processing
pip install pypdf==3.17.4
pip install docx2txt==0.8
pip install markdown==3.5.1
pip install beautifulsoup4==4.12.2
pip install unstructured==0.11.6
```

## Phase 4: API & Interface Libraries (10 minutes)

### Step 4.1: API Clients
```bash
# Already installed but verify versions
pip install openai==1.6.1
pip install anthropic==0.8.1
pip install google-generativeai==0.3.2  # Google AI
pip install cohere==4.40  # Cohere AI
```

### Step 4.2: Utility Libraries
```bash
# Model routing and management
pip install litellm==1.17.0  # Universal LLM API
pip install guidance==0.1.10  # Structured generation
pip install instructor==0.4.8  # Structure extraction
pip install jsonformer==0.12.0  # JSON generation
```

## Phase 5: Web UI & Development Tools (15 minutes)

### Step 5.1: Web Frameworks
```bash
# UI creation
pip install gradio==4.11.0
pip install streamlit==1.29.0
pip install chainlit==1.0.0  # ChatGPT-like UI
pip install fastapi==0.108.0
pip install uvicorn==0.25.0
```

### Step 5.2: Development Tools
```bash
# Jupyter and notebooks
pip install jupyter==1.0.0
pip install ipywidgets==8.1.1
pip install notebook==7.0.6

# Monitoring and debugging
pip install wandb==0.16.2  # Weights & Biases tracking
pip install rich==13.7.0  # Beautiful terminal output
pip install tqdm==4.66.1  # Progress bars
```

## Phase 6: Install Ollama (10 minutes)

### Step 6.1: Download and Install Ollama
```bash
# Download from: https://ollama.com/download/windows
# Run OllamaSetup.exe

# IMPORTANT: Configure Ollama to use workspace
setx OLLAMA_MODELS "C:\Users\brand\Development\LLM_Workspace\models\ollama"

# Restart command prompt for environment variable to take effect
# Then verify installation:
ollama --version
```

### Step 6.2: Pull Essential Models
```bash
# Models will now be stored in LLM_Workspace\models\ollama
# Start with smaller, fast models
ollama pull phi3:mini           # 2.3GB - Microsoft's tiny powerhouse
ollama pull mistral:7b-instruct # 4.1GB - Best all-around 7B
ollama pull codellama:7b        # 3.8GB - Code specialist

# Medium models that fit your 8GB VRAM
ollama pull llama2:13b-chat-q4_K_M  # 7.4GB - Larger, smarter
ollama pull solar:10.7b              # 6.1GB - Great conversationalist
ollama pull deepseek-coder:6.7b      # 3.8GB - Excellent for code

# Embedding models for RAG
ollama pull nomic-embed-text    # 274MB - Text embeddings
ollama pull mxbai-embed-large   # 670MB - Alternative embeddings
```

### Step 6.3: Test Ollama with GPU
```bash
# Verify GPU is being used
ollama run mistral "What is the meaning of life?"

# Check GPU usage in another terminal:
nvidia-smi  # Should show ollama using GPU memory
```

## Phase 7: Production Inference Servers (20 minutes)

### Step 7.1: vLLM - Fastest Inference
```bash
# High-performance inference server
pip install vllm==0.2.7

# Test vLLM with a model
python -m vllm.entrypoints.api_server \
  --model mistralai/Mistral-7B-Instruct-v0.1 \
  --tensor-parallel-size 1
```

### Step 7.2: Text Generation Inference (TGI)
```bash
# Hugging Face's production server
pip install text-generation==0.6.1
pip install text-generation-server==1.3.4
```

### Step 7.3: LocalAI Setup (Optional)
```bash
# Alternative to Ollama with OpenAI compatibility
# Download from: https://github.com/mudler/LocalAI/releases
# Extract and run: ./local-ai --models-path ./models
```

## Phase 8: Optional Advanced Tools (15 minutes)

### Step 8.1: Flash Attention 2 (Major Speed Boost)
```bash
# Requires compatible GPU and compilation
pip install ninja  # Build system
pip install flash-attn --no-build-isolation

# If fails, use pre-built wheels:
# Visit: https://github.com/Dao-AILab/flash-attention/releases
```

### Step 8.2: Additional Optimization Libraries
```bash
# Model merging and optimization
pip install mergekit==0.0.4  # Merge models
pip install lm-eval==0.4.0  # Evaluate models
pip install deepspeed==0.12.6  # Distributed training
```

### Step 8.3: Fine-tuning Tools
```bash
# For training your own models
pip install datasets==2.16.1
pip install evaluate==0.4.1
pip install trl==0.7.7  # Transformer Reinforcement Learning
pip install loralib==0.1.2  # LoRA fine-tuning
```

## Phase 9: LM Studio Installation (10 minutes)

### Step 9.1: Download and Install
```bash
# Download from: https://lmstudio.ai/
# Run installer: LM-Studio-Setup.exe
# Launch LM Studio

# Configure storage path:
# Settings → Models Directory
# Set to: C:\Users\brand\Development\LLM_Workspace\models\lmstudio
# Apply and restart LM Studio
```

### Step 9.2: Download GGUF Models in LM Studio
```
In LM Studio UI:
1. Click "Browse" tab
2. Search and download:
   - TheBloke/Mistral-7B-Instruct-v0.2-GGUF (Q4_K_M)
   - TheBloke/CodeLlama-7B-Instruct-GGUF (Q4_K_M)
   - TheBloke/Llama-2-13B-chat-GGUF (Q4_K_M)
```

## Phase 10: Verification & Testing (10 minutes)

### Step 10.1: Create Comprehensive Test Script
```python
# Save as C:\Users\brand\Development\LLM_Workspace\tools\scripts\test_llm_setup.py
import torch
import transformers
from transformers import pipeline
import time

print("=" * 60)
print("LLM SETUP VERIFICATION")
print("=" * 60)

# 1. Check CUDA
print(f"\n✓ CUDA Available: {torch.cuda.is_available()}")
if torch.cuda.is_available():
    print(f"  GPU: {torch.cuda.get_device_name(0)}")
    print(f"  VRAM: {torch.cuda.get_device_properties(0).total_memory / 1e9:.1f} GB")

# 2. Check libraries
libs = ['transformers', 'accelerate', 'bitsandbytes', 'langchain',
        'chromadb', 'sentence_transformers', 'gradio', 'streamlit']
for lib in libs:
    try:
        __import__(lib)
        print(f"✓ {lib} installed")
    except ImportError:
        print(f"✗ {lib} missing")

# 3. Test model loading
print("\nTesting GPT-2 model loading...")
start = time.time()
generator = pipeline('text-generation', model='gpt2', device=0 if torch.cuda.is_available() else -1)
result = generator("Hello world", max_length=30)
print(f"✓ Model loaded and generated text in {time.time()-start:.1f}s")
print(f"  Output: {result[0]['generated_text'][:50]}...")

print("\n✅ Setup Complete!")
```

### Step 10.2: Run the Test
```bash
cd C:\Users\brand\Development\LLM_Workspace\tools\scripts
python test_llm_setup.py
```

### Step 10.3: Test Ollama Models
```bash
# Quick test of each model
ollama run phi3:mini "Hello, how are you?"
ollama run mistral "Write a haiku about GPUs"
ollama run codellama "Write a Python function to calculate fibonacci"
```

## Phase 11: Environment Setup & Aliases (5 minutes)

### Step 11.1: Create Helpful Scripts
```bash
# Create a batch file for common operations
# Save as llm_commands.bat in your PATH

@echo off
if "%1"=="chat" ollama run mistral
if "%1"=="code" ollama run codellama
if "%1"=="gpu" nvidia-smi
if "%1"=="serve" python -m vllm.entrypoints.api_server --model mistralai/Mistral-7B-Instruct-v0.1
```

### Step 11.2: Set Environment Variables
```bash
# Add to System Environment Variables
setx CUDA_VISIBLE_DEVICES "0"
setx TRANSFORMERS_CACHE "C:\Users\brand\.cache\huggingface"
setx HF_HOME "C:\Users\brand\.cache\huggingface"
setx LLM_WORKSPACE "C:\Users\brand\Development\LLM_Workspace"
setx OLLAMA_MODELS "C:\Users\brand\Development\LLM_Workspace\models\ollama"
setx LM_STUDIO_MODELS "C:\Users\brand\Development\LLM_Workspace\models\lmstudio"
setx CHROMA_DB_PATH "C:\Users\brand\Development\LLM_Workspace\data\vector-stores\chroma"
```

## 🎯 Quick Verification Checklist

After installation, you should be able to:

- [ ] Run `nvidia-smi` and see your RTX 2000
- [ ] Run `ollama list` and see downloaded models
- [ ] Import torch and confirm CUDA is available
- [ ] Run a model with Ollama using GPU
- [ ] Load a model with transformers library
- [ ] Create a Gradio or Streamlit UI
- [ ] Use LangChain to build a RAG pipeline

## 📊 Expected Disk Usage

| Component | Size | Location |
|-----------|------|----------|
| Python packages | ~5GB | `LLM_Workspace\environments\llm-main\` |
| Ollama models | ~30GB | `LLM_Workspace\models\ollama\` |
| LM Studio models | ~20GB | `LLM_Workspace\models\lmstudio\` |
| CUDA toolkit | ~3GB | `C:\Program Files\NVIDIA GPU Computing Toolkit\` |
| HuggingFace cache | 38GB | `C:\Users\brand\.cache\huggingface\` (existing) |
| **Total Additional** | **~58GB** | |

## 🚀 First Projects to Try

1. **Chat Interface**:
   ```bash
   cd C:\Users\brand\Development\LLM_Workspace\projects\chatbots
   # Activate environment first
   ..\..\environments\llm-main\Scripts\activate

   ollama serve  # In one terminal
   python chat_app.py  # Run your chat interface
   ```

2. **RAG System**:
   ```python
   # Use ChromaDB + LangChain + Ollama
   ```

3. **Code Assistant**:
   ```bash
   ollama run codellama:7b-code
   ```

## 💡 Performance Tips

1. **Always use GPU**: Add `device=0` or `device='cuda'`
2. **Use quantization**: Load models with `load_in_4bit=True`
3. **Monitor VRAM**: Keep `nvidia-smi` running in a terminal
4. **Batch processing**: Process multiple inputs together
5. **Clear cache**: Periodically clear old model cache

## 🆘 Troubleshooting

If CUDA not detected:
```bash
# Reinstall PyTorch
pip uninstall torch torchvision torchaudio
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
```

If out of memory:
```python
# Clear GPU memory
import torch
torch.cuda.empty_cache()
```

If Ollama doesn't use GPU:
```bash
# Set environment variable
set CUDA_VISIBLE_DEVICES=0
ollama serve
```

---

**Total Installation Time: 2-3 hours**
**Result: Complete local LLM development environment with GPU acceleration!**