---
sidebar_position: 2
---

# Мотивация

Главная идея **Feature-Sliced Design** - облегчить и удешевить разработку комплексных и развивающихся проектов, на основании [объединения результатов исследований, обсуждения опыта разного рода широкого круга разработчиков][ext-discussions].

Очевидно, что это не будет серебряной пулей, и само собой, у методологии будут свои [границы применимости][refs-mission].

Тем не менее, возникают резонные вопросы, касаемо *целесообразности такой методологии в целом*

:::note

Более подробно [обсудили в дискуссии][disc-src]

:::

## Почему не хватает существующих решений? {#intuitive-clarity-for-a-wide-range-of-developers}
<!--TODO: #existing-solutions -->
> Речь обычно о таких аргументах:
>
> - *"Зачем нужна отдельная новая методология, если уже есть давно зарекомендовавшие себя подходы и принципы проектирования `SOLID`, `KISS`, `YAGNI`, `DDD`, `GRASP`, `DRY` и т.д."*
> - *"Все проблемы проекта решаются хорошей документацией, тестами и выстроенными процессами"*
> - *"Проблем бы и не было - если бы все разработчики следовали всему выше перечисленному"*
> - *"Все придумано уже до вас, вы просто не можете этим пользоваться"*
> - *"Возьмите {FRAMEWORK_NAME} - там решено уже все за вас"*

### Одних принципов недостаточно {#principles-alone-are-not-enough}

**Только существования принципов недостаточно для проектирования хорошей архитектуры**

Не все их знают до конца, еще меньше правильно понимают и применяют

*Принципы проектирования слишком общие, и не дают конкретного ответа на вопрос: "А как спроектировать структуру и архитектуру масштабируемого и гибкого приложения?"*

### Процессы не всегда работают {#processes-dont-always-work}

*Документация/Тесты/Процессы* - это, конечно, хорошо, но увы, даже при больших затратах на них - **они не всегда решают поставленных проблем по архитектуре и внедрению новых людей в проект**

- Время входа каждого разработчика в проект не сильно уменьшается, т.к. документация чаще всего выйдет огромной / устаревшей
- Постоянно следить за тем, что каждый понимает архитектуру одинаково - требует также колоссального количества ресурсов
- Не забываем и про bus-factor

### Существующие фреймворки не везде могут быть применены {#existing-frameworks-cannot-be-applied-everywhere}

- Имеющиеся решения, как правило, имеют высокий порог входа, из-за чего сложно найти новых разработчиков
- Также, чаще всего, выбор технологии уже определен до наступления серьезных проблем в проекте, а потому нужно уметь "работать с тем что есть" - **не привязываясь к технологии**

> Q: *"У меня в проекте `React/Vue/Redux/Effector/Mobx/{YOUR_TECH}` - как мне лучше выстроить структуру сущностей и связи между ними?"*

### По итогу {#as-a-result}

Получаем *"уникальные как снежинки"* проекты, каждый из которых требует длительного погружения сотрудника, и знания, которые вряд ли будут применимы на другом проекте

> @sergeysova: *"Это ровно та ситуация, которая сейчас есть в нашей сфере frontend разработки: каждый лид напридумает себе различных архитектур и структур проекта, при этом не факт, что эти структуры пройдут проверку временем, в итоге кроме него развивать проект могут максимум два человека и каждого нового разработчика нужно погружать снова."*

## Зачем методология разработчикам? {#why-do-developers-need-the-methodology}

### Концентрация на бизнес-фичах, а не на проблемах архитектуры {#focus-on-business-features-not-on-architecture-problems}

Методология позволяет экономить ресурсы на проектировании масштабируемой и гибкой архитектуры, вместо этого направляя внимание разработчиков на разработку основной функциональности. При этом стандартизируются и сами архитектурные решения из проекта в проект.

*Отдельный вопрос, что методология должна заслужить доверие комьюнити, чтобы другой разработчик мог в имеющиеся у него сроки ознакомиться и положиться на нее при решении проблем своего проекта*

### Проверенное опытом решение {#an-experience-proven-solution}

Методология рассчитана на разработчиков, нацеленных на *проверенное опытом решение по проектированию комплексной бизнес-логики*

*Однако ясно, что методология - это в целом про набор best-practices, статьи, рассматривающие определенные проблемы и кейсы при разработке. Поэтому - польза от методологии будет и для остального круга разработчиков - кто так или иначе сталкивается с проблемами при разработке и проектировании*

### Здоровье проекта {#project-health}

Методология позволит *заблаговременно решать и отслеживать проблемы проекта, не требуя огромного количества ресурсов*

**Чаще всего тех.долг копится и копится со временем, и ответственность за его разрешение лежит и на лиде, и на команде**

Методология же позволит *заранее предупреждать* возможные проблемы при масштабировании и развитии проекта

## Зачем методология бизнесу? {#why-does-a-business-need-a-methodology}

### Быстрый onboarding {#fast-onboarding}

С методологией можно нанять человека в проект, который **уже предварительно знаком с таким подходом, а не обучать заново**

*Люди начинают быстрее вникать и приносить пользу проекту, а также появляются дополнительные гарантии найти людей на следующие итерации проекта*

### Проверенное опытом решение {#an-experience-proven-solution-1}

С методологией бизнес получит *решение для большинства вопросов, возникающих при разработке систем*

Поскольку чаще всего бизнес хочет получить фреймворк/решение, которое бы решало львиную долю проблем при развитии проекта

### Применимость для разных стадий проекта {#applicability-for-different-stages-of-the-project}

Методология может принести пользу проекту *как на этапе поддержки и развития проекта, так и на этапе MVP*

Да, на MVP чаще всего важнее *"фичи, а не заложенная на будущее архитектура"*. Но даже в условиях ограниченных сроков, зная best-practices из методологии - можно *"обойтись малой кровью"*, при проектировании MVP-версии системы, находя разумный компромисс
(нежели лепить фичи "как попало")

*То же самое можно сказать и про тестирование*

## Когда наша методология не нужна? {#when-is-our-methodology-not-needed}

- Если проект будет жить короткое время
- Если проект не нуждается в поддерживаемой архитектуре
- Если бизнес не воспринимает связь кодовой базы и скорости деливеринга фич
- Если бизнесу важнее поскорей закрыть заказы, без дальнейшей поддержки

### Размеры бизнеса {#business-size}

- **Малый бизнес** - чаще всего нуждается в готовом и очень быстром решении. Только при росте бизнеса (хотя бы до почти среднего), он понимает - чтобы клиенты продолжали пользоваться, нужно в том числе уделить время качеству и стабильности разрабатываемых решений
- **Средний бизнес** - обычно понимает все проблемы разработки, и даже если приходится *"устраивать гонку за фичами"*, он все равно уделяет время на доработки по качеству, рефакторинг и тесты (и само собой - на расширяемую архитектуру)
- **Большой бизнес** - обычно уже имеет обширную аудиторию, штат сотрудников, и гораздо более обширный набор своих практик, и наверное даже - свой подход к архитектуре, поэтому идея взять чужую - им приходит не так часто

## Планы {#plans}

Основная часть целей [изложена здесь][refs-mission--goals], но помимо этого, стоит проговорить и наши ожидания от методологии в будущем

### Объединение опыта {#combining-experience}

Сейчас мы пытаемся объединить весь наш разнородный опыт `core-team`, и получить по итогу закаленную практикой методологию

Конечно, мы можем получить по итогу Angular 3.0., но гораздо важней здесь - **исследовать саму проблему проектирования архитектуры сложных систем**

*И да - у нас есть претензии и к текущей версии методологии, но мы хотим общими усилиями прийти к единому и оптимальному решению (учитывая, в том числе, и опыт комьюнити)*

### Жизнь вне спецификации {#life-outside-the-specification}

Если все сложится хорошо, то методология не будет ограничиваться только спецификацией и тулкитом

- Возможно будут и доклады, статьи
- Возможно будут `CODE_MODEs` для миграций на другие технологии проектов, написанных согласно методологии
- Не исключено, что по итогу сможем дойти и до мейнтейнеров крупных технологических решений
  - *Особенно для React, по сравнению с другими фреймворками - это главная проблема, т.к. он не говорит как решать определенные проблемы*

## См. также {#see-also}

- [(Обсуждение) Методология не нужна?][disc-src]
- [О миссии методологии: цели и ограничения][refs-mission]
- [Типы знаний в проекте][refs-knowledge]

[refs-mission]: /docs/about/mission
[refs-mission--goals]: /docs/about/mission#goals
[refs-knowledge]: /docs/about/understanding/knowledge-types

[disc-src]: https://github.com/feature-sliced/documentation/discussions/27
[ext-discussions]: https://github.com/feature-sliced/documentation/discussions