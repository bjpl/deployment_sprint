# Quick Reference - LLMs on Your System

## 🚀 What You Have

### Models (38GB total)
- **Qwen/Qwen2.5-14B-Instruct** (28GB) - Best for chat/instructions
- **EleutherAI/gpt-neo-2.7B** (10GB) - Good for text generation
- **gpt2** (526MB) - Lightweight, runs anywhere

### Python Packages Installed
```bash
torch==2.1.1
anthropic==0.67.0
openai==1.63.2
safetensors==0.6.2
streamlit==1.45.1
fastapi==0.116.1
```

## ⚡ Quick Start

### 1. Install Missing Essentials
```bash
pip install transformers accelerate
```

### 2. Test Your Setup
```bash
cd C:\Users\brand\Development\Project_Workspace\active-development\llms_on_my_system\scripts
python test_local_models.py
```

### 3. Simple GPT-2 Test (Works Now!)
```python
from transformers import pipeline

# This will use your cached GPT-2
generator = pipeline('text-generation', model='gpt2')
result = generator("Hello, I am", max_length=30)
print(result[0]['generated_text'])
```

## 💾 Memory Requirements

| Model | FP32 (Full) | FP16 (Half) | INT8 | INT4 |
|-------|-------------|-------------|------|------|
| GPT-2 | 3-4 GB | 2 GB | 1 GB | 0.5 GB |
| GPT-Neo 2.7B | 11 GB | 6 GB | 3 GB | 1.5 GB |
| Qwen 14B | 56 GB | 28 GB | 14 GB | 7 GB |

## 🎯 Use Cases by Model

### GPT-2 (Start Here!)
- Quick tests
- Learning/experimentation
- Runs on CPU
- No GPU needed

### GPT-Neo 2.7B
- Creative writing
- Story generation
- Code completion
- Needs 8+ GB RAM

### Qwen 2.5 14B
- Advanced chat
- Code generation
- Multilingual tasks
- Reasoning
- Needs 20+ GB RAM (or use quantization)

## 📦 Essential Commands

### Check What's Installed
```bash
pip list | grep -E "torch|transformers|accelerate"
```

### Monitor System Resources
```bash
# Windows Task Manager
taskmgr

# Python memory check
python -c "import psutil; print(f'RAM: {psutil.virtual_memory().available/1e9:.1f}GB available')"
```

### Cache Locations
- Models: `C:\Users\brand\.cache\huggingface\hub\`
- Size: 38GB total

## 🔧 Loading Models - Copy & Paste Examples

### Minimal GPT-2 Example
```python
from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = AutoModelForCausalLM.from_pretrained("gpt2")

prompt = "The meaning of life is"
inputs = tokenizer(prompt, return_tensors="pt")
outputs = model.generate(**inputs, max_length=30)
print(tokenizer.decode(outputs[0]))
```

### Memory-Efficient Qwen (if you have 16GB+ RAM)
```python
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

# Load in 8-bit to save memory
model_name = "Qwen/Qwen2.5-14B-Instruct"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(
    model_name,
    torch_dtype=torch.float16,
    load_in_8bit=True,  # Requires bitsandbytes
    device_map="auto"
)
```

## 🚨 Troubleshooting

### Out of Memory?
1. Use smaller model (GPT-2)
2. Use quantization (load_in_8bit=True)
3. Reduce max_length in generation
4. Clear RAM: Close other applications

### Model Won't Load?
```bash
# Install dependencies
pip install transformers accelerate bitsandbytes

# For 8-bit quantization
pip install bitsandbytes
```

### Slow Generation?
- CPU inference is slow - this is normal
- Consider GPU or cloud solutions for production
- Use smaller models for testing

## 🎓 Learning Path

1. **Start**: Run `test_local_models.py`
2. **Experiment**: Try GPT-2 examples
3. **Scale**: Move to GPT-Neo when comfortable
4. **Advanced**: Try Qwen with quantization
5. **Optimize**: Install Ollama for better management

## 📞 Next Steps

1. **Today**: Test GPT-2 with the examples above
2. **This Week**: Install transformers and try all models
3. **Next**: Consider Ollama for easier model management
4. **Future**: Look into GGUF models for better CPU performance

---

**Remember**: You already have 38GB of powerful models ready to use! Just need to install transformers to unlock them.