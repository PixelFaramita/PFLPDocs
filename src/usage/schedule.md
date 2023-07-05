---
title: ScheduleTask | 定时任务
order: 370
---

## 配置文件

```json
"ScheduleTask": {
    "ModuleEnabled": true,
    "Tasks": [
      {
        "Corntab": "*/2 * * * * *",
        "RunCommand": "say 233"
      }
    ]
  }
```

## 说明

- 使用 CornTab 语法描述任务
- `RunCommand`任务执行的命令
- 其他功能待添加
