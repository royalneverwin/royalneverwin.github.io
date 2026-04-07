import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Cpu,
  Database,
  FileText,
  Github,
  GraduationCap,
  Mail,
  Sparkles,
  Trophy,
  type LucideIcon,
} from 'lucide-react'

type Signal = {
  label: string
  value: string
  detail: string
}

type FocusArea = {
  title: string
  description: string
  items: string[]
  icon: LucideIcon
}

type Experience = {
  period: string
  type: string
  title: string
  summary: string
  details: string[]
  outcome: string
}

type Publication = {
  venue: string
  title: string
  contribution: string
}

type SkillGroup = {
  title: string
  items: string[]
}

function SectionIntro({
  kicker,
  title,
  description,
}: {
  kicker: string
  title: string
  description: string
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">
        {description}
      </p>
    </div>
  )
}

export default function Home() {
  const allPosts = getAllPosts()
  const recentPosts = allPosts.slice(0, 3)

  const signals: Signal[] = [
    {
      label: '教育背景',
      value: '北京大学数据科学硕士',
      detail: '计算机方向，2023.09 - 2026.07',
    },
    {
      label: '当前经历',
      value: '字节跳动应用算法实习生',
      detail: '商业安全统一 MLLM 训练框架与模型落地',
    },
    {
      label: '论文与发表',
      value: 'CVPR / ECCV / ICCV Workshop',
      detail: '覆盖 3D 感知、雷达相机融合与模型量化',
    },
    {
      label: '部署实践',
      value: 'PyTorch -> ONNX -> TensorRT',
      detail: '包含 CUDA 自定义算子、FP16 / INT8 量化与 Orin 车端部署',
    },
  ]

  const focusAreas: FocusArea[] = [
    {
      title: '三维感知算法',
      description: '围绕多摄像头、雷达与鸟瞰空间表征做 3D 检测、多任务感知和占据预测。',
      items: ['多摄相机长时序输入建模', '雷达-相机融合', '自动驾驶多任务感知'],
      icon: Database,
    },
    {
      title: '模型压缩与部署',
      description: '把研究模型推进到可落地状态，打通蒸馏、量化、推理链路和车端交付。',
      items: ['知识蒸馏', '量化感知训练', 'TensorRT / INT8 / Orin'],
      icon: Cpu,
    },
    {
      title: '训练框架工程化',
      description: '在统一训练框架中补齐功能、迁移业务模型，并提升数据与训练效率。',
      items: ['MLLM 训练框架迭代', 'generate 与训中推支持', '业务模型迁移与维护'],
      icon: Sparkles,
    },
  ]

  const experiences: Experience[] = [
    {
      period: '2025.07 - 至今',
      type: '实习',
      title: '字节跳动 · 商业安全应用算法',
      summary: '参与商业安全统一 MLLM 训练框架研发、剪枝算法研发和业务模型在统一框架中的落地。',
      details: [
        '在 Kraken 框架中支持模型 generate、训中推等能力，帮助提升数据构建与训练闭环效率。',
        '实现 VisionZip 与 CDPruner 在 mammothmoda 2 上的剪枝方案，并协助 release 版本实现。',
        '协助 CCR 业务模型向统一训练框架迁移并持续迭代。',
      ],
      outcome: '把算法方案和训练框架能力一起往前推，减少模型从研究到业务的落地阻力。',
    },
    {
      period: '2024.05 - 2025.05',
      type: '科研项目',
      title: '多模态数据融合环境三维感知',
      summary: '设计基于多摄像机图像与毫米波雷达的占据栅格预测、3D 目标检测和多任务感知算法。',
      details: [
        '负责三维目标检测编码器实现，以及多任务模型轻量化方案构建。',
        '继续打通 CUDA 自定义算子、自定义推理步骤与 FP32 到 FP16 / INT8 的量化流程。',
      ],
      outcome: '相关模型在开源数据集和甲方数据集上达到交付指标，并在车载 Orin 芯片上完成部署。',
    },
    {
      period: '2024.03 - 至今',
      type: '科研项目',
      title: '2030 项目 · 面向通用视觉的机器学习理论与方法',
      summary: '探索一个通用视觉模型同时处理 2D 检测、2D 实例分割、3D 检测和 BEV 语义分割。',
      details: [
        '使用 InternVL 作为教师模型，对学生模型进行泛化性蒸馏，提升 2D 任务精度。',
        '负责蒸馏与量化脚本设计，支持接入项目网页端实现一键蒸馏与一键量化。',
      ],
      outcome: '学生模型在 2D 任务上取得 0.5% 的性能提升，也让实验流程更容易工程化复用。',
    },
    {
      period: '2024.03 - 2024.07',
      type: '工程项目',
      title: 'QFactory 量化感知训练工具包',
      summary: '开发面向卷积层和线性层的量化感知训练工具包，并用于三维感知模型部署。',
      details: [
        '实现卷积层与线性层的伪量化算法代码，并将工具包应用到开源模型 BEVDepth。',
        '覆盖从量化感知训练到在 NVIDIA Orin 上部署为 INT8 TensorRT 的全流程。',
      ],
      outcome: '把量化实验、性能验证和部署交付连接成一条可重复的工程链路。',
    },
    {
      period: '2023.03 - 2024.03',
      type: '科研项目',
      title: '端到端多摄融合周视三维场景感知',
      summary: '设计面向长时序、高分辨率多摄输入的高效编码器与多任务解码器，构建周视 3D 感知算法。',
      details: [
        '负责高效编码器代码实现，并参与多任务解码器方案设计讨论。',
        '构建轻量化模型，打通 PyTorch 转 ONNX、ONNX 转 TensorRT、自定义 CUDA 算子和量化推理流程。',
      ],
      outcome: '合作模型在 nuScenes 3D 检测 RC 赛道取得第一名，并在 NVIDIA Orin 上达到车端交付要求。',
    },
  ]

  const publications: Publication[] = [
    {
      venue: 'CVPR 2024',
      title: 'RCBEVDet: Radar-camera Fusion in Bird\'s Eye View for 3D Object Detection',
      contribution: '第四作者，负责多摄相机输入编码器架构的代码实现与论文部分撰写。',
    },
    {
      venue: 'ECCV 2024',
      title: 'HENet: Hybrid Encoding for End-to-end Multi-task 3D Perception from Multi-view Cameras',
      contribution: '第三作者，提出长时序高分辨率多摄输入处理方法，并负责高效编码器代码实现。',
    },
    {
      venue: 'ICCV Workshop 2025',
      title: 'PTQAT: A Hybrid Parameter-Efficient Quantization Algorithm for 3D Perception Tasks',
      contribution: '第一作者，负责相关工作调研、混合量化方法设计、实验与论文撰写。',
    },
    {
      venue: '在投',
      title: 'OpenAD: Open-World Autonomous Driving Benchmark for 3D Object Detection',
      contribution: '第四作者，负责部分数据标注、数据集转换、3D 开源模型评测和论文部分撰写。',
    },
  ]

  const skillGroups: SkillGroup[] = [
    {
      title: '研究与算法',
      items: ['3D Perception', 'Occupancy Prediction', 'Model Quantization', 'Knowledge Distillation', 'Model Pruning', 'MLLM'],
    },
    {
      title: '工程与部署',
      items: ['PyTorch', 'ONNX', 'TensorRT', 'CUDA', 'FP16 / INT8', 'Kraken'],
    },
    {
      title: '语言与基础',
      items: ['Python', 'C/C++', '实验脚本开发', '训练框架维护', '技术写作', '英文论文阅读与撰写'],
    },
  ]

  return (
    <div className="pb-20 pt-6 md:pb-28 md:pt-10">
      <section className="container relative">
        <div className="hero-glow hero-glow-left" aria-hidden="true" />
        <div className="hero-glow hero-glow-right" aria-hidden="true" />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.85fr)] lg:items-start">
          <div className="relative z-10">
            <p className="section-kicker">王新昊 · Wang Xinhao · RoyalNeverWin</p>
            <h1 className="display-title mt-6 max-w-4xl text-5xl leading-tight tracking-tight text-[var(--foreground)] md:text-6xl lg:text-7xl">
              把三维感知模型做得更准、更轻，也更能真正落地。
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              北京大学数据科学硕士在读，研究方向聚焦自动驾驶三维感知、模型量化、知识蒸馏、模型剪枝与
              MLLM 工程化。我喜欢把研究问题一路推进到部署和交付，把“能跑起来”继续做成“值得上线”。
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--foreground)]">
              {['3D Perception', 'Model Quantization', 'Knowledge Distillation', 'Model Pruning', 'TensorRT', 'MLLM'].map((item) => (
                <span key={item} className="rounded-full border border-[color:var(--line)] bg-[var(--surface-strong)] px-4 py-2 shadow-[0_8px_24px_rgba(36,30,20,0.06)]">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:wangxinhao@pku.edu.cn"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                <Mail size={18} />
                联系我
              </a>
              <a
                href="https://github.com/royalneverwin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="#publications"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-semibold text-[var(--muted)] transition-colors hover:border-[color:var(--accent)] hover:text-[var(--foreground)]"
              >
                查看论文与成果
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {signals.map((signal) => (
                <div key={signal.label} className="surface-panel min-h-36 p-5">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                    {signal.label}
                  </p>
                  <p className="mt-4 text-xl font-semibold text-[var(--foreground)]">
                    {signal.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {signal.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="relative z-10">
            <div className="surface-panel overflow-hidden p-5 md:p-6">
              <div className="rounded-[30px] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(222,233,227,0.92),rgba(248,244,236,0.92))] p-3">
                <div className="overflow-hidden rounded-[24px]">
                  <Image
                    src="/wangxinhao.jpg"
                    alt="王新昊"
                    width={1279}
                    height={1732}
                    priority
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-[var(--foreground)]">王新昊</h2>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    北京大学数据科学硕士 · 3D 感知 / 模型效率 / 工程化
                  </p>
                </div>
                <div className="rounded-full border border-[color:var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-semibold tracking-[0.16em] text-[var(--accent-strong)]">
                  AVAILABLE FOR COLLAB
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 rounded-2xl bg-[var(--surface-soft)] px-4 py-4">
                  <GraduationCap size={18} className="mt-0.5 text-[var(--accent)]" />
                  <div>
                    <p className="font-medium text-[var(--foreground)]">教育经历</p>
                    <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                      北京大学数据科学与大数据技术本科，北京大学数据科学硕士在读。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-[var(--surface-soft)] px-4 py-4">
                  <Trophy size={18} className="mt-0.5 text-[var(--accent)]" />
                  <div>
                    <p className="font-medium text-[var(--foreground)]">成果标签</p>
                    <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                      CVPR 2024、ECCV 2024、ICCV Workshop 2025，覆盖感知模型与量化方法。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-[var(--surface-soft)] px-4 py-4">
                  <Briefcase size={18} className="mt-0.5 text-[var(--accent)]" />
                  <div>
                    <p className="font-medium text-[var(--foreground)]">当前关注</p>
                    <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                      统一训练框架、模型剪枝与蒸馏、从实验脚本到推理部署的完整效率优化。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container mt-20 md:mt-24">
        <SectionIntro
          kicker="Focus"
          title="我更擅长把研究思路推进成可交付的工程结果"
          description="相比只停留在论文实验，我更在意模型最终是否能被训练、压缩、部署和复用。简历里的大部分项目，都围绕这个目标展开。"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <div key={area.title} className="surface-panel p-6 md:p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[var(--accent-soft)] p-3 text-[var(--accent)]">
                  <area.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{area.title}</h3>
              </div>

              <p className="mt-5 text-sm leading-7 text-[var(--muted)] md:text-base">
                {area.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {area.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:var(--line)] bg-[var(--surface-strong)] px-3 py-1.5 text-sm text-[var(--foreground)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="container mt-20 scroll-mt-24 md:mt-24">
        <SectionIntro
          kicker="Experience"
          title="关键经历"
          description="下面这些经历基本构成了我的能力画像：一边做三维感知与模型效率研究，一边补齐训练框架、量化部署和业务迁移的工程部分。"
        />

        <div className="space-y-5">
          {experiences.map((experience) => (
            <article key={`${experience.period}-${experience.title}`} className="surface-panel p-6 md:p-7">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold tracking-[0.16em] text-[var(--accent-strong)]">
                      {experience.type}
                    </span>
                    <span className="text-sm font-medium text-[var(--muted)]">{experience.period}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold text-[var(--foreground)]">
                    {experience.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                    {experience.summary}
                  </p>
                </div>

                <div className="w-full max-w-sm rounded-[24px] border border-[color:var(--line)] bg-[var(--surface-soft)] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">
                    输出结果
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)] md:text-base">
                    {experience.outcome}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {experience.details.map((detail) => (
                  <div key={detail} className="flex items-start gap-3 rounded-2xl border border-[color:var(--line)] bg-[var(--surface-strong)] px-4 py-4">
                    <div className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                    <p className="text-sm leading-7 text-[var(--foreground)] md:text-base">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="publications" className="container mt-20 scroll-mt-24 md:mt-24">
        <SectionIntro
          kicker="Publications"
          title="论文与成果"
          description="这些论文和项目输出，基本对应了我最近几年的主线工作：自动驾驶 3D 感知、多模态融合，以及模型量化与效率优化。"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {publications.map((publication) => (
            <article key={`${publication.venue}-${publication.title}`} className="surface-panel flex h-full flex-col p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-[color:var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-semibold tracking-[0.16em] text-[var(--accent-strong)]">
                  {publication.venue}
                </span>
                <FileText size={18} className="text-[var(--accent)]" />
              </div>

              <h3 className="mt-5 text-xl font-semibold leading-8 text-[var(--foreground)]">
                {publication.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)] md:text-base">
                {publication.contribution}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container mt-20 md:mt-24">
        <SectionIntro
          kicker="Capabilities"
          title="能力栈"
          description="技术栈并不是简单的关键词堆叠，我更关心的是这些能力能否被组合成一条完整的问题解决路径。"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="surface-panel p-6">
              <div className="flex items-center gap-3">
                {group.title === '研究与算法' && <BookOpen size={18} className="text-[var(--accent)]" />}
                {group.title === '工程与部署' && <Cpu size={18} className="text-[var(--accent)]" />}
                {group.title === '语言与基础' && <Sparkles size={18} className="text-[var(--accent)]" />}
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{group.title}</h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:var(--line)] bg-[var(--surface-strong)] px-3 py-1.5 text-sm text-[var(--foreground)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container mt-20 md:mt-24">
        <SectionIntro
          kicker="Writing"
          title="博客与笔记"
          description="我也会把一些开发、部署和学习过程沉淀成文章。这里保留了博客入口，方便把项目之外的思考继续串起来。"
        />

        <div className="mb-8 flex items-center justify-between gap-4">
          <p className="text-sm text-[var(--muted)]">
            最近更新的文章会优先展示在这里。
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-strong)] transition-colors hover:text-[var(--foreground)]"
          >
            查看全部文章
            <ArrowRight size={16} />
          </Link>
        </div>

        {recentPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="surface-panel p-8 text-center text-[var(--muted)]">
            暂无文章，后续会把项目拆解、部署踩坑和研究记录慢慢补上。
          </div>
        )}
      </section>
    </div>
  )
}
