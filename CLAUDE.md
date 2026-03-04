# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

This is a zero-dependency static site — no build step, no package manager, no framework.

To preview locally:
```
open index.html
# or serve with any static server:
npx serve .
python3 -m http.server 8080
```

## Architecture

Three files, that's the whole site:
- `index.html` — all content and markup
- `styles.css` — all styles
- `script.js` — scroll-based nav highlighting, stamp animation, taskbar clock

### Windows 95 Design System

All visual tokens live in `:root` in `styles.css`. The two most critical are the 3D bevel effects used everywhere:

```css
--raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;
--sunken: inset 1px 1px #0a0a0a, inset -1px -1px #ffffff, inset 2px 2px #808080, inset -2px -2px #dfdfdf;
```

- `--raised` → buttons, panels, window chrome (elevated look)
- `--sunken` → input wells, content cards, stat boxes (recessed look)

Key colors: `--navy: #000080` (headings, title bars, hover states), `--btn-face: #D4D0C8` (panel background), `--teal-desktop: #008080` (page/body background).

### Section = Window

Every `<section>` is styled as a floating Win95 window on the teal desktop background. The structure inside each section is:

```html
<section id="...">
  <div class="win-titlebar">
    <span class="win-title-text">🖥 Window Title</span>
    <div class="win-controls">
      <button class="win-btn">_</button>
      <button class="win-btn">□</button>
      <button class="win-btn">×</button>
    </div>
  </div>
  <div class="container">
    <!-- content -->
  </div>
</section>
```

New sections must follow this pattern and use only system fonts (`Arial`, `Courier New`) — no Google Fonts or external font dependencies.

## About Mark Scarsi (site owner)

Use this as the source of truth for bio content, credentials, and experience when updating the site.

**Contact:** markscarsidev@gmail.com · (626) 429-7007 · https://www.linkedin.com/in/markscarsijr/

### Experience

**Meta – Reality Labs, RL AI Trust** — Software Engineer, New York, NY (Sept. 2025 – present)
- Designed and implemented end-to-end LLM pipelines to improve performance and reliability of AI systems supporting Reality Labs products.
- Built LLM evaluation and validation frameworks, including automated benchmarks to ensure model correctness and safety.
- Developed monitoring and observability pipelines for AI systems, enabling real-time insight into model behavior in production.
- Fine-tuned large language models for domain-specific use cases and led advanced Red Teaming efforts to identify safety and robustness gaps.

**NBCUniversal – Operations and Technology, Linear and Nonlinear Scheduling** — Senior Full Stack Engineer, New York, NY (Sept. 2023 – Sept. 2025)
- Built new initiatives in Java Springboot and C++ essential to onboarding more business groups onto the application.
- Improved application latency by improving legacy code and implementing best practices for fast applications.
- Migrated AWS ECS services into new IP range, and wrote Terraform scripts for all key integration services in AWS.
- Led workshops and presentations with the business on new developments.
- Integrated Liquibase to help track database changes in a reliable and organized way.
- Created a completely isolated clone of the AWS cloud application environment using Terraform.

**Comcast NBCUniversal – CORE Rotational Program**

*Data Scientist, Reliability Experience and Global Product Operations* — Philadelphia, PA (Jan. 2023 – Sept. 2023)
- Trained and developed Deep Learning models to predict in-home video errors based on telemetry.
- Built dynamic frontends to allow managers to interact with and explore reliability AI capability in real-time.

*AI/ML Engineer, Emerging Tech Researcher, Comcast Labs* — Sunnyvale, CA (Aug. 2022 – Jan. 2023)
- Developed Deep Learning knowledge in Reliability, Conservation, and MDU with Large Language Models.
- Presented cutting-edge topics to top executives. Served as a resource across Comcast for NLP, CV, and LLMs.

*Full Stack Software Scheduling Engineer, Operations and Technology* — New York, NY (May 2021 – Aug. 2022)
- Built systems for scheduling programs for NBCU non-linear platforms (Peacock, Universal+, SkyShowtime).
- Developed a first-of-its-kind app scheduling programs in 20+ countries across LatAm using Microfrontend/Microservice architecture with teams from the US, UK, and Vietnam.

### Skills
LLM fine-tuning, pipelines, agent development, RAG · Deep Learning (Keras, Jupyter) · ETL pipelines (Kafka, Kinesis, SQL Server, MySQL, PostgreSQL, Python) · Springboot Microservices/Microfrontend (SingleSPA) · Cloud architecture, Terraform, AWS · React, Angular, C++, Java Springboot

### Education
**University of Southern California** — B.S. Computer Science and Business Administration, May 2021. GPA 3.5, Cum Laude.
