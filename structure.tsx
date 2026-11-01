import type { StructureResolver } from 'sanity/structure'
import { Icon } from '@sanity/icons'

const makeIcon = (symbol: string) => () => <Icon symbol={symbol as any} />

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Homecycle Studio')
    .items([
      // ===== Home Workout =====
      S.listItem()
        .title('Home Workout')
        .icon(makeIcon('play'))
        .child(
          S.list()
            .title('Home Workout')
            .items([
              S.listItem()
                .title('Program Info')
                .icon(makeIcon('book'))
                .child(
                  S.document()
                    .schemaType('workoutProgram')
                    .documentId('program-home-workout')
                ),
              S.divider(),
              ...[1, 2, 3, 4].map((week) =>
                S.listItem()
                  .title(`Week ${week}`)
                  .icon(makeIcon('compose'))
                  .child(
                    S.documentList()
                      .title(`Week ${week} — Exercises`)
                      .filter(
                        '_type == "exercise" && week == $week && !(_id match "spine-ex-*")'
                      )
                      .params({ week })
                      .defaultOrdering([{ field: 'name', direction: 'asc' }])
                  )
              ),
            ])
        ),

      // ===== Spine Bar =====
      S.listItem()
        .title('Spine Bar')
        .icon(makeIcon('activity'))
        .child(
          S.list()
            .title('Spine Bar')
            .items([
              S.listItem()
                .title('Program Info')
                .icon(makeIcon('book'))
                .child(
                  S.document()
                    .schemaType('workoutProgram')
                    .documentId('program-spine-bar')
                ),
              S.divider(),
              ...[
                { id: 'reset', label: '1. Reset' },
                { id: 'open', label: '2. Mobility' },
                { id: 'core', label: '3. Core' },
              ].map((group) =>
                S.listItem()
                  .title(group.label)
                  .icon(makeIcon('compose'))
                  .child(
                    S.documentList()
                      .title(group.label)
                      .filter('_type == "exercise" && groupId == $groupId')
                      .params({ groupId: group.id })
                  )
              ),
            ])
        ),

      // ===== Karate Training =====
      S.listItem()
        .title('Karate Training')
        .icon(makeIcon('book'))
        .child(
          S.list()
            .title('Karate Training')
            .items([
              S.listItem()
                .title('Program Info')
                .icon(makeIcon('book'))
                .child(
                  S.document()
                    .schemaType('workoutProgram')
                    .documentId('program-karate')
                ),
              S.divider(),
              ...[
                { id: 'kihon', label: 'KIHON (Nền tảng)' },
                { id: 'kata', label: 'KATA (Bài quyền)' },
                { id: 'kumite', label: 'KUMITE (Đối luyện)' },
              ].map((track) =>
                S.listItem()
                  .title(track.label)
                  .icon(makeIcon('compose'))
                  .child(
                    S.documentList()
                      .title(track.label)
                      .filter('_type == "karateSession" && track == $track')
                      .params({ track: track.id })
                      .defaultOrdering([{ field: 'week', direction: 'asc' }])
                  )
              ),
            ])
        ),

      S.divider(),

      // ===== Library =====
      S.listItem()
        .title('Library')
        .icon(makeIcon('book'))
        .child(
          S.list()
            .title('Library')
            .items([
              S.documentTypeListItem('exerciseCategory').title('Categories'),
            ])
        ),

      // ===== Settings =====
      S.listItem()
        .title('Settings')
        .icon(makeIcon('cog'))
        .child(S.documentTypeListItem('siteSettings').title('Site Settings')),
    ])