import './App.css';
import React from 'react';
import Tree from './components/Tree/Tree';

const treeData = [
  {
    id: 'b2d48d40-db14-4674-8310-edb51d19400c',
    type: 'image',
    name: 'enhance.jpeg',
  },
  {
    id: 'e3a4ae91-2ecf-44a8-96f1-7177cde575ad',
    type: 'image',
    name: 'Persevering purple Iceland.jpeg',
  },
  {
    id: '4ca34ab1-badb-47b3-83d7-890f9c17e5ab',
    type: 'doc',
    name: 'Plastic Paradigm Account.pdf',
  },
  {
    id: 'ca09a85f-5cec-47dd-abe1-09c6ecfb43d7',
    type: 'image',
    name: 'Idaho matrix multi-state tan.jpeg',
  },
  {
    id: '88817d64-8fc8-41ed-8b75-9b2d8360783a',
    type: 'doc',
    name: 'invoice real-time.pdf',
  },
  {
    id: 'c527e7ae-46d2-49b8-bd12-0a8ff5b0b4d5',
    type: 'doc',
    name: 'Computers Metal.pdf',
  },
  {
    id: '59c8b9c7-21f4-4d50-886f-e94fd7a03a3e',
    type: 'image',
    name: 'Curve violet paradigms.jpeg',
  },
  {
    id: 'b92b81e7-0c6f-4950-98a6-80eda7e1c940',
    type: 'image',
    name: 'connecting 4th payment Future.jpeg',
  },
  {
    id: 'c009507e-64ed-45f6-89a2-9cf5147482f0',
    type: 'image',
    name: 'cultivate.jpeg',
  },
  {
    id: '2172a06c-aa09-4eb7-a891-af845e55c87f',
    type: 'doc',
    name: 'Kyrgyz Salad.pdf',
  },
  {
    id: '7c0b741b-d393-4851-ad18-55686ed00971',
    type: 'image',
    name: 'Practical.jpeg',
  },
  {
    id: '91516851-9e45-4ad2-ba15-6b88fe653d80',
    type: 'image',
    name: 'Berkshire HTTP Island black.jpeg',
  },
  {
    id: '768afde5-9265-4208-91d5-a4714bee6408',
    type: 'image',
    name: 'Outdoors Steel 24/7.jpeg',
  },
  {
    id: 'afb1b2bf-a81f-4549-9360-a46ca4f7e71f',
    type: 'doc',
    name: 'navigating.pdf',
  },
  {
    id: '3768494b-5639-4f89-8ce4-b1f4c7bcfcee',
    type: 'doc',
    name: 'Officer convergence.pdf',
  },
  {
    id: 'f91db553-b957-4ee4-9049-15eaa25c724d',
    type: 'doc',
    name: 'Track Persistent.pdf',
  },
  {
    id: '79112983-1418-4135-9274-8acd5e91ee5e',
    type: 'image',
    name: 'interfaces.jpeg',
  },
  {
    id: '855c7177-b036-480e-975b-c26f1c37641d',
    type: 'folder',
    name: 'channels salmon Industrial Fresh',
    children: [],
  },
  {
    id: 'a93b512c-7eec-4f31-8c5d-30f2b055e0b4',
    type: 'folder',
    name: 'Account Frozen payment Kansas',
    children: [
      {
        id: '1be6fd0b-0bcb-4ac1-9030-2f39888fbf5b',
        type: 'folder',
        name: 'Account',
        children: [
          {
            id: '7b41fad7-868c-451e-bfb6-e1fe3c88a354',
            type: 'image',
            name: 'Cyprus Concrete.jpeg',
          },
          {
            id: '080e086f-8505-45a4-9405-a66f239c4268',
            type: 'doc',
            name: 'navigate Unbranded Program Bedfordshire.pdf',
          },
          {
            id: '4833daa4-2e32-4969-8947-3e0546727e6a',
            type: 'image',
            name: 'forecast Intranet.jpeg',
          },
          {
            id: '47b0b8ce-989c-4683-9547-2725abe7e0a9',
            type: 'doc',
            name: 'mission-critical.pdf',
          },
          {
            id: '3624e123-2780-4e24-afce-f560d98f21f5',
            type: 'image',
            name: 'online engage Licensed application.jpeg',
          },
          {
            id: '05be2d0b-ebc5-4767-bff4-c13427b2b0a1',
            type: 'image',
            name: 'Inverse Home Face synergize.jpeg',
          },
          {
            id: '8582182b-2983-4987-8f2b-111a2223c306',
            type: 'doc',
            name: 'Clothing View Trail Table.pdf',
          },
          {
            id: '753b1018-ddfe-40be-b5b7-1f639ae6a2b9',
            type: 'image',
            name: 'reboot connecting port.jpeg',
          },
          {
            id: '4894a903-45f3-4028-a213-ede2eb5c24a5',
            type: 'image',
            name: 'parallelism Cotton Wooden.jpeg',
          },
          {
            id: 'f53e268b-9e04-4b76-8440-fb87c6cf8225',
            type: 'doc',
            name: 'Representative copying.pdf',
          },
          {
            id: '0b83aee1-2b36-4f0b-bafe-8519de027718',
            type: 'image',
            name: 'Card.jpeg',
          },
          {
            id: 'da26ef1e-18b2-4091-8d58-72ce3cb5d15a',
            type: 'doc',
            name: 'Dollar) CSS Jewelery.pdf',
          },
          {
            id: '46ad975a-9edd-4f92-ab32-dce876bcbc83',
            type: 'image',
            name: 'Sports calculate Licensed transmit.jpeg',
          },
          {
            id: '4d19be9f-6187-4e19-9ee4-6e32afb75d93',
            type: 'doc',
            name: 'Concrete background Cheese.pdf',
          },
          {
            id: '64bda1af-a355-4c52-83ef-bbc2e3299537',
            type: 'doc',
            name: 'Mexican methodical withdrawal Sleek.pdf',
          },
          {
            id: '417237a7-c430-45ab-a0db-a88b0a94129b',
            type: 'image',
            name: 'enhance.jpeg',
          },
          {
            id: '3d98b320-713f-49b6-863c-005a8558394d',
            type: 'folder',
            name: 'Plastic',
            children: [
              {
                id: '5a1f7540-a969-4ac7-8e21-c6c22c50a8c6',
                type: 'doc',
                name: 'invoice Haven.pdf',
              },
              {
                id: 'e32b753f-4d86-4e2e-9f5a-2b7c078e9bf9',
                type: 'image',
                name: 'Pants hierarchy fault-tolerant.jpeg',
              },
              {
                id: '2e8b1473-10dc-4b3a-bd7f-a4cc354ce85e',
                type: 'doc',
                name: 'deposit parsing.pdf',
              },
              {
                id: '5db15f29-e3c0-45f0-8e59-3d2ea23cec42',
                type: 'folder',
                name: 'Concrete Corporate Mouse Business-focused',
                children: [
                  {
                    id: '03f85d03-7d9f-4eb1-8ea2-38d2124fbd37',
                    type: 'folder',
                    name: 'regional',
                    children: [
                      {
                        id: '902871cc-602f-425b-8391-a892f2db7b95',
                        type: 'folder',
                        name: 'Account',
                        children: [
                          {
                            id: '14d28507-f68e-4deb-bf4c-ba97532bd135',
                            type: 'doc',
                            name: 'zero.pdf',
                          },
                          {
                            id: '1adb6f29-7741-4205-be4f-2c7f56a7a972',
                            type: 'image',
                            name: 'Spurs Sleek Belarus.jpeg',
                          },
                          {
                            id: '33314198-e05c-4136-a1f8-2f853ed3dc2e',
                            type: 'image',
                            name: 'Oklahoma Dynamic.jpeg',
                          },
                          {
                            id: '9a515d6c-ecae-42f6-bfd3-59d415e0eda6',
                            type: 'doc',
                            name: 'JBOD Division overriding Zambia.pdf',
                          },
                          {
                            id: '02eeb721-6a51-4930-a23e-b6942d57f881',
                            type: 'image',
                            name: 'projection.jpeg',
                          },
                          {
                            id: 'd41c489f-9782-49ff-8416-749d87764a72',
                            type: 'image',
                            name: 'Illinois.jpeg',
                          },
                          {
                            id: '73bb5763-676c-4801-8427-ba4e1c24814e',
                            type: 'image',
                            name: 'Internal Investor wireless.jpeg',
                          },
                          {
                            id: 'e0a97af4-9734-45d1-9d34-fac4b3ccda85',
                            type: 'image',
                            name: 'sensor Creative.jpeg',
                          },
                          {
                            id: '1cd36f82-79b3-4ec5-b02a-e7e8de01c8a8',
                            type: 'image',
                            name: 'challenge Rustic Product optical.jpeg',
                          },
                          {
                            id: '0a252e1b-a483-4d3f-8501-06dc2e5762c6',
                            type: 'doc',
                            name: 'Gorgeous.pdf',
                          },
                          {
                            id: '710c8eed-35e6-46b0-a548-8026866a2c32',
                            type: 'image',
                            name: 'up Steel.jpeg',
                          },
                          {
                            id: 'c4c60e4b-4a8a-4c84-aa34-6fea80cfbeca',
                            type: 'doc',
                            name: 'Administrator.pdf',
                          },
                          {
                            id: '3a6afd83-de76-437b-af8b-748e99cecc18',
                            type: 'image',
                            name: 'installation.jpeg',
                          },
                          {
                            id: '3565c2c1-9985-4f1a-9275-d87984aa7a78',
                            type: 'doc',
                            name: 'Rustic ivory bypass bluetooth.pdf',
                          },
                          {
                            id: '75538131-7291-4154-ab30-2e59e8613676',
                            type: 'doc',
                            name: 'archive.pdf',
                          },
                          {
                            id: 'b3875fb0-d770-4662-92b4-65f843eeee8e',
                            type: 'doc',
                            name: 'Steel THX.pdf',
                          },
                          {
                            id: '988768f1-84a7-4670-aa27-063b0ff35004',
                            type: 'image',
                            name: 'primary SSL West Integration.jpeg',
                          },
                          {
                            id: '482f8464-7ee6-4c6a-b255-d2b92e9c47e2',
                            type: 'doc',
                            name: 'ability concept Saudi Brook.pdf',
                          },
                          {
                            id: 'dc85838e-c6ec-4e1e-b3dd-eeb34fbea464',
                            type: 'image',
                            name: 'Account Keyboard.jpeg',
                          },
                          {
                            id: '309bd228-b110-4a91-9383-f1ef08874107',
                            type: 'image',
                            name: 'productize interface Fields SSL.jpeg',
                          },
                          {
                            id: '8a3c3ac2-2223-41ca-be7f-ce775abe1a69',
                            type: 'image',
                            name: 'input Manager.jpeg',
                          },
                          {
                            id: '38ef3fc1-9747-457c-8a23-0f8979fc0249',
                            type: 'doc',
                            name: 'Account.pdf',
                          },
                          {
                            id: '210d66f9-884f-4d7f-8b05-5475b2a5b221',
                            type: 'folder',
                            name: 'discrete Liaison structure',
                            children: [
                              {
                                id: '4e9d153f-cd14-49d1-9d08-927873e4fe22',
                                type: 'folder',
                                name: 'connect input',
                                children: [
                                  {
                                    id: '92686abf-9b46-4085-bfa5-93a7e75cea6a',
                                    type: 'folder',
                                    name: 'digital multi-byte USB',
                                    children: [],
                                  },
                                  {
                                    id: '2c617109-6401-4282-9550-81b1d3d9f039',
                                    type: 'folder',
                                    name: 'Account Wooden enterprise',
                                    children: [],
                                  },
                                  {
                                    id: 'd383e717-bd4b-4e00-88cd-99d0fb2260f8',
                                    type: 'doc',
                                    name: 'Barbados.pdf',
                                  },
                                  {
                                    id: '20c3ee6e-f0df-4fd6-8ad9-13424a87ebb6',
                                    type: 'doc',
                                    name: 'Agent Sports quantifying Serbia.pdf',
                                  },
                                  {
                                    id: '0efe897b-68ae-4c8b-8dfa-1cf255e42faf',
                                    type: 'doc',
                                    name: 'global bandwidth.pdf',
                                  },
                                  {
                                    id: '27852bc2-b4e8-48da-ab77-635244a04fd8',
                                    type: 'doc',
                                    name: 'bus Gorgeous.pdf',
                                  },
                                  {
                                    id: '56ad3f5d-e22d-4f60-8dd5-c171004276a0',
                                    type: 'image',
                                    name: 'networks project SSL Plastic.jpeg',
                                  },
                                  {
                                    id: 'e6fffce7-8671-44db-bd21-1b7f5a56f7a0',
                                    type: 'doc',
                                    name:
                                      'user-facing Fantastic backing generate.pdf',
                                  },
                                  {
                                    id: '029f5d83-83e2-42aa-8ed0-ed18c5f85ec4',
                                    type: 'doc',
                                    name: 'Buckinghamshire Industrial.pdf',
                                  },
                                  {
                                    id: 'c72f248d-0d8b-450e-8789-da9292b97c20',
                                    type: 'image',
                                    name: 'Gorgeous withdrawal.jpeg',
                                  },
                                  {
                                    id: '00ab464f-628c-462c-8369-8599c1a5b835',
                                    type: 'doc',
                                    name: 'encryption Planner architect.pdf',
                                  },
                                  {
                                    id: '8724a121-68e0-4c6a-84dd-d9dd146e9a8c',
                                    type: 'image',
                                    name: 'Officer orchid.jpeg',
                                  },
                                  {
                                    id: 'c09df874-045a-450b-bccf-2fb4b95d3ac3',
                                    type: 'image',
                                    name: 'Aruba.jpeg',
                                  },
                                  {
                                    id: '13d1e062-bd50-4ee4-b844-46e6834fca85',
                                    type: 'doc',
                                    name: 'Cotton orchestration.pdf',
                                  },
                                  {
                                    id: 'c4fbdb2f-45a4-46c2-b6fd-a1aed7f235b7',
                                    type: 'doc',
                                    name: 'Chair Intelligent.pdf',
                                  },
                                  {
                                    id: 'aef7c280-5cca-4bf5-b76c-a7c320e7f0f7',
                                    type: 'doc',
                                    name: 'Cambodia Direct copy.pdf',
                                  },
                                  {
                                    id: 'c41baa09-69f9-4666-9ddb-9281428b483b',
                                    type: 'image',
                                    name: 'algorithm Generic York deposit.jpeg',
                                  },
                                  {
                                    id: 'd15dca39-a100-4d8c-bd85-251a30100b35',
                                    type: 'doc',
                                    name: 'adapter plum sticky Upgradable.pdf',
                                  },
                                  {
                                    id: '071c45ee-06f6-4b8b-86e8-824894d09a0b',
                                    type: 'image',
                                    name: 'TCP.jpeg',
                                  },
                                  {
                                    id: '6619c661-6063-47b0-a53d-56524556b3bf',
                                    type: 'image',
                                    name:
                                      'Managed User-friendly copying supply-chains.jpeg',
                                  },
                                  {
                                    id: '22d9c639-c4e0-4ee0-8bf8-bad56a261230',
                                    type: 'image',
                                    name:
                                      'hacking Awesome auxiliary exuding.jpeg',
                                  },
                                  {
                                    id: 'd54a4a3f-4ce6-45b6-b9e4-50c7406fae03',
                                    type: 'doc',
                                    name: 'Fantastic.pdf',
                                  },
                                  {
                                    id: 'c11e3a74-e0af-48b0-b34a-96a1668cf6e9',
                                    type: 'image',
                                    name: 'Auto monitor.jpeg',
                                  },
                                  {
                                    id: '455f118b-b502-48b3-b47e-a4fd9570f0ff',
                                    type: 'doc',
                                    name: 'North Ball virtual.pdf',
                                  },
                                  {
                                    id: '1d934c2f-be1c-4a1b-878b-631b177a1d24',
                                    type: 'doc',
                                    name:
                                      'Legacy Interactions wireless silver.pdf',
                                  },
                                  {
                                    id: '3d2a0a5f-f0c0-4039-a7f4-c20b47f54e44',
                                    type: 'image',
                                    name: 'Place.jpeg',
                                  },
                                  {
                                    id: '537a3095-17fc-45ec-9e79-85965179923c',
                                    type: 'doc',
                                    name: 'alarm.pdf',
                                  },
                                  {
                                    id: 'f09da720-07b9-4431-ac88-4b654a76b832',
                                    type: 'doc',
                                    name: 'Checking Account.pdf',
                                  },
                                  {
                                    id: '09b17a13-8697-431f-b934-6c659ee548e1',
                                    type: 'doc',
                                    name: 'indigo Functionality redundant.pdf',
                                  },
                                  {
                                    id: 'b4e6e3d3-30f3-4208-8414-e7d9c35c55d8',
                                    type: 'image',
                                    name: 'Idaho Awesome.jpeg',
                                  },
                                  {
                                    id: '9354af03-f3e5-47fa-8a7c-23aa47c8ca0c',
                                    type: 'doc',
                                    name: 'withdrawal Borders Awesome.pdf',
                                  },
                                  {
                                    id: 'd6625efd-42f8-4087-b6d0-c552bf456e47',
                                    type: 'image',
                                    name:
                                      'Supervisor Open-architected generate digital.jpeg',
                                  },
                                  {
                                    id: '73896b97-5fde-430a-a756-1a2d5bd88a21',
                                    type: 'folder',
                                    name: 'embrace',
                                    children: [],
                                  },
                                  {
                                    id: 'da7079c1-3546-41c6-ac4a-9082cffa4bbc',
                                    type: 'image',
                                    name: 'global.jpeg',
                                  },
                                  {
                                    id: '15fbc542-7cf8-417d-98f4-bef05cc4187d',
                                    type: 'doc',
                                    name: 'Bedfordshire.pdf',
                                  },
                                  {
                                    id: '4580f05a-33a2-4a4e-905e-36e3eba1fc63',
                                    type: 'image',
                                    name: 'Island Concrete.jpeg',
                                  },
                                  {
                                    id: '7d7f9586-7446-4827-af55-a26584f08779',
                                    type: 'doc',
                                    name: 'real-time deposit.pdf',
                                  },
                                  {
                                    id: 'de01b6e5-d9ee-4b34-ac3c-66171ca92f61',
                                    type: 'doc',
                                    name:
                                      'synthesizing cultivate transmit non-volatile.pdf',
                                  },
                                  {
                                    id: 'd0cac743-0b43-45f4-b986-cc1917bb4537',
                                    type: 'doc',
                                    name: 'Marks.pdf',
                                  },
                                  {
                                    id: '2a245ab9-af41-4efb-bc74-126a9de91418',
                                    type: 'image',
                                    name: 'Granite matrix.jpeg',
                                  },
                                  {
                                    id: '8a531782-bfa6-4260-890d-da4116e04f23',
                                    type: 'image',
                                    name: 'Pennsylvania Arizona.jpeg',
                                  },
                                  {
                                    id: '41d03322-f954-4695-b724-098621c8ed9d',
                                    type: 'image',
                                    name: 'motivating Table EXE.jpeg',
                                  },
                                  {
                                    id: 'b6e50c52-d8e7-4cdd-811b-26a0956b1354',
                                    type: 'doc',
                                    name: 'Wooden turn-key user-facing.pdf',
                                  },
                                  {
                                    id: 'f5ba663d-c42e-42e2-a589-b2e6db8c285c',
                                    type: 'image',
                                    name: 'utilisation.jpeg',
                                  },
                                  {
                                    id: '9783fb1c-120b-4b3c-a992-60a1b59c6f5e',
                                    type: 'image',
                                    name: 'Configurable.jpeg',
                                  },
                                  {
                                    id: '41662023-3a5f-4a53-8eef-6dff21c7d253',
                                    type: 'image',
                                    name:
                                      'installation withdrawal Executive.jpeg',
                                  },
                                  {
                                    id: 'b9f906cd-e2f9-41ce-b4d3-c834012ce5c2',
                                    type: 'image',
                                    name: 'Centralized.jpeg',
                                  },
                                  {
                                    id: '3a6dab07-ee8e-4869-9e11-0ac09548ded9',
                                    type: 'doc',
                                    name: 'Practical.pdf',
                                  },
                                ],
                              },
                              {
                                id: '8f34d274-cd66-459a-9c9e-4ccdfa7d693c',
                                type: 'image',
                                name:
                                  'Berkshire responsive well-modulated Tasty.jpeg',
                              },
                              {
                                id: '5a7abaee-d21a-4e82-9c2b-4ab6c126c569',
                                type: 'image',
                                name: 'Indiana.jpeg',
                              },
                              {
                                id: 'c4fd29ee-1d67-4273-9d99-865f9dc55b5c',
                                type: 'image',
                                name: 'Account programming invoice maroon.jpeg',
                              },
                              {
                                id: '913bfc9e-67b6-4c63-a2fa-04015fdacf61',
                                type: 'doc',
                                name: 'quantifying.pdf',
                              },
                              {
                                id: '49a77cde-3a89-4ed6-aa39-e355e05e7c54',
                                type: 'doc',
                                name: 'Savings eyeballs vortals Tasty.pdf',
                              },
                              {
                                id: 'fb8cabbf-4682-4d1d-89df-3ca3c6b2f42f',
                                type: 'doc',
                                name: 'technologies Applications Metal.pdf',
                              },
                              {
                                id: '2f11331b-b57a-40fa-82d4-c4c42cb7ff44',
                                type: 'doc',
                                name: 'JBOD Cambridgeshire.pdf',
                              },
                              {
                                id: '8fb70e6d-7123-48d0-beec-953ce08f9e4b',
                                type: 'doc',
                                name: 'New.pdf',
                              },
                              {
                                id: '1a857ff3-2148-4dcd-8ae3-9115dbcee3f9',
                                type: 'doc',
                                name: 'Plains payment Frozen visualize.pdf',
                              },
                              {
                                id: '2c60bd2b-c052-4fe7-8b2e-046cbbeb6228',
                                type: 'doc',
                                name: 'Future Associate CSS Sterling.pdf',
                              },
                              {
                                id: '33643e3a-643e-41f6-b9e2-e588dc4f0d24',
                                type: 'image',
                                name:
                                  'International withdrawal withdrawal.jpeg',
                              },
                              {
                                id: '4d51adcb-56cb-4edb-b85c-12e840fbbd16',
                                type: 'doc',
                                name: 'Account cyan Solutions.pdf',
                              },
                              {
                                id: 'd36507c0-a641-44a6-b6e0-1ebbc987b701',
                                type: 'folder',
                                name: 'deposit',
                                children: [],
                              },
                              {
                                id: '08aa7eb2-2bbd-4da1-9ead-e8d1284952df',
                                type: 'folder',
                                name: 'architect Market Cotton',
                                children: [],
                              },
                              {
                                id: '9f2309a1-1eaa-4d6c-bf94-1b26f16c36bb',
                                type: 'folder',
                                name: 'Concrete mindshare withdrawal',
                                children: [],
                              },
                            ],
                          },
                          {
                            id: 'c174a4fd-a88c-446f-99f6-160d19d3d2c0',
                            type: 'image',
                            name: 'green attitude Table.jpeg',
                          },
                          {
                            id: 'd787440d-9bfd-445e-8794-d20426b109eb',
                            type: 'image',
                            name: 'Auto.jpeg',
                          },
                          {
                            id: '8c2a5194-88d8-48ac-8c9a-8742e0d8aaef',
                            type: 'doc',
                            name: 'Outdoors Berkshire.pdf',
                          },
                          {
                            id: 'fd95264f-69dc-4e1b-9e58-91be08702ae1',
                            type: 'folder',
                            name: 'standardization Fish drive',
                            children: [],
                          },
                          {
                            id: 'e53f0fec-3ade-4b8f-8ca3-bc48ac70e2a9',
                            type: 'folder',
                            name: 'Implementation cross-platform',
                            children: [],
                          },
                          {
                            id: '2feb5a9b-7cd6-4fa4-9cff-bf9c45dfbac2',
                            type: 'doc',
                            name: 'navigate Soap utilize.pdf',
                          },
                          {
                            id: '92309774-8d82-4478-8edc-10e9e07e93e1',
                            type: 'doc',
                            name: 'Sleek Metal 1080p TCP.pdf',
                          },
                          {
                            id: '63b217e5-7f83-4073-be2e-bf73d2d56663',
                            type: 'doc',
                            name: 'of embrace Accountability Brunei.pdf',
                          },
                          {
                            id: '3797c7f4-4fd4-4118-b0bb-bcdf2a4740ad',
                            type: 'image',
                            name: 'synergies Soft Future.jpeg',
                          },
                          {
                            id: '638013d5-5c5d-4d2e-8982-537580eee2dc',
                            type: 'image',
                            name: 'Grocery Corporate.jpeg',
                          },
                          {
                            id: '5d76fee3-9193-4e1c-a693-da2802a41b13',
                            type: 'doc',
                            name: 'SQL Indian.pdf',
                          },
                          {
                            id: '1ed42dd7-fb4b-4d7f-84a0-fe32247a2cc1',
                            type: 'image',
                            name: 'web-readiness.jpeg',
                          },
                          {
                            id: 'a715059f-f0e3-40ff-89be-353ab7e77d60',
                            type: 'image',
                            name: 'Direct Soft Keyboard.jpeg',
                          },
                          {
                            id: '04b1bbc6-c056-4407-bcc7-b661c865d2f8',
                            type: 'folder',
                            name: 'Colon Keyboard Industrial Electronics',
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: '3489cef4-d475-43e6-b119-03b31500bd88',
                    type: 'doc',
                    name: 'Light.pdf',
                  },
                  {
                    id: '13775493-e893-4c72-ad7c-60f3e12bf819',
                    type: 'doc',
                    name: 'Avon Beauty.pdf',
                  },
                  {
                    id: '44a96703-5319-42ab-b10a-d689920e09ea',
                    type: 'doc',
                    name: 'Berkshire Rhode drive mission-critical.pdf',
                  },
                  {
                    id: '520f23c7-ad70-4f15-a415-46876c01e22f',
                    type: 'image',
                    name: 'Fantastic Nicaragua gold.jpeg',
                  },
                  {
                    id: '245b7856-a394-4eee-bbd3-42a7f8a11956',
                    type: 'image',
                    name: 'intangible ubiquitous connecting.jpeg',
                  },
                  {
                    id: '7d5db5fa-2b5b-447c-a468-57963e5536b1',
                    type: 'image',
                    name: 'Program redundant parallelism intelligence.jpeg',
                  },
                  {
                    id: '44010181-9883-4460-abed-c4d8b6403f27',
                    type: 'image',
                    name: 'Bedfordshire Product bypass black.jpeg',
                  },
                  {
                    id: 'bb7a2fe4-46db-4ff6-968d-4796f209f6f5',
                    type: 'image',
                    name: 'haptic blockchains.jpeg',
                  },
                  {
                    id: 'd386e67d-7233-4ea8-a9cc-fab321904d27',
                    type: 'folder',
                    name: 'Refined Hryvnia Algeria Ball',
                    children: [],
                  },
                ],
              },
              {
                id: '1cd60321-26d6-4add-b060-c1c6f594bb35',
                type: 'doc',
                name: 'invoice Future-proofed Credit Facilitator.pdf',
              },
              {
                id: '3c26657d-4985-4617-b694-844fe413cff2',
                type: 'doc',
                name: 'architect hacking Arkansas.pdf',
              },
              {
                id: '72173fae-a96c-4578-8188-b38e5a86b572',
                type: 'doc',
                name: 'synergy infrastructures reinvent.pdf',
              },
              {
                id: '4a776d6c-c1f3-43a8-823c-71ae093f88c8',
                type: 'image',
                name: 'definition.jpeg',
              },
              {
                id: '4c66b92f-64e5-43d2-99a3-badd153fd5cd',
                type: 'doc',
                name: 'recontextualize.pdf',
              },
              {
                id: '6fcc5437-a5e0-41ec-afdc-3175fe643d8b',
                type: 'doc',
                name: 'Avon Clothing Re-contextualized white.pdf',
              },
              {
                id: 'e733f830-50f8-4f0f-a969-ae9358b1381f',
                type: 'doc',
                name: 'mindshare up Mount.pdf',
              },
              {
                id: '15d54c11-8a1d-49ee-86bd-13a56ac11c19',
                type: 'doc',
                name: 'Baby Colorado withdrawal Small.pdf',
              },
              {
                id: '04784703-b016-4e74-99d3-7ee32f86527e',
                type: 'doc',
                name: 'success deposit.pdf',
              },
              {
                id: 'e82d546e-45bd-4272-9b07-c7efc0dc7d15',
                type: 'image',
                name: 'Avon Utah solution black.jpeg',
              },
              {
                id: '6db9e715-4870-411a-aedb-9412cf1f8030',
                type: 'image',
                name: 'Koruna Malagasy.jpeg',
              },
              {
                id: 'e5780e6e-1be9-4965-a0ca-7fc6f3b7be77',
                type: 'doc',
                name: 'Down-sized withdrawal Officer Sharable.pdf',
              },
              {
                id: '1a948861-bf52-422c-a947-63761b3e3193',
                type: 'image',
                name: 'Azerbaijan feed Tuna.jpeg',
              },
              {
                id: '3a31f87a-1e47-4786-93eb-0cf2cbdec152',
                type: 'doc',
                name: 'open-source auxiliary Gourde.pdf',
              },
              {
                id: '5585eafe-3650-4aa5-a7e2-ddb2276ab46e',
                type: 'doc',
                name: 'District.pdf',
              },
              {
                id: 'd27d2d14-4bb3-434f-bd26-d4eb5e1cdf9c',
                type: 'image',
                name: 'Latvia Intranet e-enable.jpeg',
              },
              {
                id: '343c284f-a298-4cf8-9c46-f85abc020c2d',
                type: 'image',
                name: 'online Global.jpeg',
              },
              {
                id: '50a38c06-8984-45e1-bb34-4fb851ac186b',
                type: 'doc',
                name: 'Arizona deposit.pdf',
              },
              {
                id: '16d77ae6-b6f4-44f3-b204-af424debb8e1',
                type: 'doc',
                name: 'application PNG XML Coordinator.pdf',
              },
              {
                id: 'fb6bb35b-efc7-414f-b599-4a48fa11390f',
                type: 'image',
                name: 'Paraguay.jpeg',
              },
              {
                id: '4a2399c6-0569-4912-941d-0eb6b43d72aa',
                type: 'doc',
                name: 'Bedfordshire Cotton incentivize.pdf',
              },
              {
                id: '0d3f7143-eb56-43de-bef5-54bcfe040e85',
                type: 'doc',
                name: 'Gorgeous application compress.pdf',
              },
              {
                id: '6f5f8b93-0a43-411c-b570-728589816ee7',
                type: 'doc',
                name: 'core Intelligent.pdf',
              },
              {
                id: '0740c2e4-d266-4adb-8a8e-cdcc514c2cdf',
                type: 'doc',
                name: 'AGP Buckinghamshire.pdf',
              },
              {
                id: '9e5848e5-3baf-4fab-b8ee-4c738af41fb2',
                type: 'image',
                name: 'Concrete New channels Director.jpeg',
              },
              {
                id: '64aafb55-da97-4f8c-bac4-854ac9cae08d',
                type: 'doc',
                name: 'Wooden Legacy Associate Gloves.pdf',
              },
              {
                id: 'f2ae2432-e85d-4ca0-bc5a-4fd7192c222f',
                type: 'folder',
                name: 'Lodge',
                children: [],
              },
              {
                id: 'f08f0bb0-6049-45c5-a2de-ec26f1dd507d',
                type: 'image',
                name: 'Handmade Brand Island.jpeg',
              },
              {
                id: 'fb77d8d6-14d6-4e81-b611-15d9eba8c328',
                type: 'image',
                name: 'hack.jpeg',
              },
              {
                id: '6fc8ce5c-45bb-4709-9574-2d71e5a05da1',
                type: 'doc',
                name: 'generate.pdf',
              },
              {
                id: 'f5a5075f-86e0-4717-b40b-d9a77e88cd97',
                type: 'image',
                name: 'azure Cambridgeshire Plastic Lats.jpeg',
              },
              {
                id: '6af3104e-7ce5-4abf-84d5-d13c1734b545',
                type: 'doc',
                name: 'Monitored Awesome experiences Personal.pdf',
              },
              {
                id: '743d1f09-59cd-4161-8a4d-d311b64369a0',
                type: 'doc',
                name: 'Honduras hacking Tactics indexing.pdf',
              },
              {
                id: '0026c027-c925-4360-8584-aedef9997ef4',
                type: 'image',
                name: 'methodology SAS Illinois.jpeg',
              },
              {
                id: '46036bd9-3271-4214-88f9-6f2982674b7f',
                type: 'image',
                name: 'function Multi-layered Profound.jpeg',
              },
              {
                id: 'a5456744-ecef-408b-942f-f6f5a68249c6',
                type: 'doc',
                name: 'content-based Analyst Berkshire bandwidth.pdf',
              },
              {
                id: 'e290203d-4c69-497f-80a6-fed69dbeae62',
                type: 'doc',
                name: 'hacking 3rd Open-source Sweden.pdf',
              },
              {
                id: '2ec5395d-46bb-472a-a300-aa1b246b67a8',
                type: 'doc',
                name: 'firmware.pdf',
              },
              {
                id: '65fe9bed-1e01-49d1-864c-99b7a68d58f0',
                type: 'image',
                name: 'Intelligent backing Cross-platform Squares.jpeg',
              },
              {
                id: 'adeea7ee-4224-405d-a7d2-64f39e64c3de',
                type: 'image',
                name: 'content deposit.jpeg',
              },
              {
                id: '5cca24b0-a16f-4223-ae33-614ba15d6505',
                type: 'image',
                name: 'program.jpeg',
              },
              {
                id: '94d1ee67-62b2-4f91-bd5a-5014ed109547',
                type: 'folder',
                name: 'Slovenia TCP South COM',
                children: [],
              },
              {
                id: '62cb30f8-9299-4a22-a6e6-2996c6842a6c',
                type: 'image',
                name: 'Texas hard Towels invoice.jpeg',
              },
              {
                id: 'e32bd596-6f21-4b21-9265-205674f20780',
                type: 'image',
                name: 'Account Customer-focused.jpeg',
              },
              {
                id: '236a01e9-f44f-49ad-b247-a96eb43fee4c',
                type: 'image',
                name: 'Borders Direct bypass payment.jpeg',
              },
              {
                id: '38db881c-df26-4ca6-a918-6aeb79359151',
                type: 'doc',
                name: 'Reverse-engineered Human indexing Games.pdf',
              },
              {
                id: '01bbac1e-b83d-473b-9529-3fe5cdb9ffbd',
                type: 'doc',
                name: 'Keys syndicate digital.pdf',
              },
              {
                id: 'bb76f224-b146-428e-a35b-3641220900b9',
                type: 'doc',
                name: 'array benchmark.pdf',
              },
              {
                id: '2d450211-c088-4156-8c3d-178a5b00910c',
                type: 'doc',
                name: 'Music.pdf',
              },
              {
                id: '796d64ab-e9a6-4565-ba08-a69c7ac6f674',
                type: 'doc',
                name: 'Facilitator.pdf',
              },
              {
                id: 'c7529327-0a6a-494b-82ec-34c83c92a272',
                type: 'image',
                name: 'yellow.jpeg',
              },
              {
                id: '3528ea7d-a3f1-4e42-8224-576a27615d19',
                type: 'doc',
                name: 'Generic Interface.pdf',
              },
              {
                id: '51d61b4e-abc1-48ab-8ded-5e214f91f74f',
                type: 'doc',
                name: 'open.pdf',
              },
              {
                id: '3f81dfa7-959a-4aea-ac9b-15597e396d1f',
                type: 'doc',
                name: 'Euro matrix up override.pdf',
              },
              {
                id: '26118bee-05a9-45ff-90f5-972cb0160bf6',
                type: 'doc',
                name: 'Assistant.pdf',
              },
              {
                id: '3fff2f16-e7da-4302-81eb-1149b10a8075',
                type: 'image',
                name: 'Car Naira.jpeg',
              },
              {
                id: 'ff8acc72-daf3-4be7-b556-a36c413c246d',
                type: 'image',
                name: 'Cotton.jpeg',
              },
              {
                id: '3ef43ae1-7b0e-4b3f-9981-f2ecba5cf1d6',
                type: 'doc',
                name: 'Soft redundant Data.pdf',
              },
              {
                id: '1f3d5fb5-f29d-466a-8248-abc3dd5b0add',
                type: 'folder',
                name: 'dynamic Buckinghamshire calculating seamless',
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 'ffe1bd0b-777e-4b1f-b9d0-f22cc6dddb6f',
        type: 'folder',
        name: 'IB Cotton Gloves USB',
        children: [],
      },
      {
        id: '90d5a057-9e1b-4923-8af6-b7582469de3b',
        type: 'folder',
        name: 'unleash white',
        children: [],
      },
      {
        id: '3abc6d70-9aa0-49e1-954f-07b8d29ce633',
        type: 'image',
        name: 'program bypass.jpeg',
      },
      {
        id: '5fcc1f45-263e-49c6-872e-b61431966710',
        type: 'doc',
        name: 'holistic.pdf',
      },
      {
        id: 'bb2f77e2-d610-492c-a115-1542dd984bca',
        type: 'image',
        name: 'Books zero Dominican.jpeg',
      },
      {
        id: 'b6e85439-68b5-4edb-b070-dcf0aa738970',
        type: 'image',
        name: 'Assistant Operations Infrastructure.jpeg',
      },
      {
        id: '717f5b67-8594-4b5d-9a01-379da2caac89',
        type: 'image',
        name: 'Dakota Assimilated Utah.jpeg',
      },
      {
        id: 'eca85ffb-3973-4906-b5f1-91e257c2841f',
        type: 'doc',
        name: 'port Island open-source Chicken.pdf',
      },
      {
        id: '82cac54b-092e-4caa-976d-316edb14a434',
        type: 'image',
        name: 'overriding back Gibraltar.jpeg',
      },
      {
        id: 'f4af7fd4-1b6c-4e30-8aa6-f942941b764b',
        type: 'doc',
        name: 'azure protocol Designer.pdf',
      },
      {
        id: '4ce40f1e-c25e-4322-b773-c7a5e96dff99',
        type: 'doc',
        name: 'Denar Corporate Frozen holistic.pdf',
      },
      {
        id: 'd866c015-c6e3-4fbc-a4f6-d54d2fac4bb4',
        type: 'doc',
        name: 'Granite.pdf',
      },
      {
        id: '5c2ada01-0228-494f-97d9-e1a639e0bc6a',
        type: 'image',
        name: 'Computers Baby deposit system.jpeg',
      },
      {
        id: '8da8ea87-ca61-4bc5-8da1-43f0f999b839',
        type: 'image',
        name: 'wireless driver compress.jpeg',
      },
      {
        id: '71c14e82-ead7-4795-a021-e60571c0d437',
        type: 'doc',
        name: 'Guinea-Bissau Account Cliff Principal.pdf',
      },
      {
        id: '4bcef56b-18b4-4bab-bd47-35bfd86353ed',
        type: 'image',
        name: 'green.jpeg',
      },
      {
        id: '10c36079-4422-4e53-ae32-9a579183d30b',
        type: 'image',
        name: 'CSS Guernsey.jpeg',
      },
      {
        id: '602b6efe-98d8-40c8-8c0b-a7a20edbc8f9',
        type: 'image',
        name: 'Strategist.jpeg',
      },
    ],
  },
  {
    id: 'ac480d56-9313-4896-ba0f-19e36ed3c416',
    type: 'folder',
    name: 'Bedfordshire Buckinghamshire index Rubber',
    children: [
      {
        id: '72870001-7a23-44d4-8cab-ce7de29291f5',
        type: 'doc',
        name: 'Avon olive.pdf',
      },
      {
        id: 'e7a9d651-953b-4849-9578-36579fb69776',
        type: 'doc',
        name: 'generating.pdf',
      },
      {
        id: '01b6dce3-23d1-42c4-a3df-92208a65eda2',
        type: 'doc',
        name: 'full-range Qatar time-frame.pdf',
      },
      {
        id: '6448355d-fff4-4d48-9c4c-b7b614f18c78',
        type: 'doc',
        name: 'connect Arizona exuding.pdf',
      },
      {
        id: '31be72c0-6d50-4492-bc41-eceeb09bf6b1',
        type: 'doc',
        name: 'Carolina Manor.pdf',
      },
      {
        id: 'b5654b0c-a509-4074-ba2f-c3e92b75decf',
        type: 'doc',
        name: 'Mississippi RSS Account indexing.pdf',
      },
      {
        id: '1877be48-f2c5-45fa-968a-326bdf14d4a7',
        type: 'image',
        name: 'Illinois overriding.jpeg',
      },
      {
        id: '4a117f29-a81b-4e09-8d11-5b5d81e40a7a',
        type: 'image',
        name: 'Directives.jpeg',
      },
      {
        id: 'a9736382-f40a-4de6-b688-84784013035e',
        type: 'doc',
        name: 'Checking.pdf',
      },
      {
        id: 'ab8706a9-5132-4eff-8e59-b7e7f1a9995e',
        type: 'image',
        name: 'capacitor Tactics.jpeg',
      },
      {
        id: '2959e6a3-6bf0-47fa-93a3-07d061ed8cc5',
        type: 'doc',
        name: 'programming invoice.pdf',
      },
      {
        id: '38ff1029-5050-4682-93a0-10e9e204d298',
        type: 'doc',
        name: 'architecture.pdf',
      },
      {
        id: '570dccfc-0fb0-4599-adc6-07993de602c4',
        type: 'doc',
        name: 'Licensed.pdf',
      },
      {
        id: '83bc1d95-6195-4b46-ac66-74c6d3b386bc',
        type: 'image',
        name: 'B2C.jpeg',
      },
      {
        id: '8acf2f35-873d-4a24-8158-7b8d2a5e1a8f',
        type: 'doc',
        name: 'invoice.pdf',
      },
      {
        id: '07eb55a1-3adc-45db-9efd-aae608b988bd',
        type: 'folder',
        name: 'Island synthesizing',
        children: [
          {
            id: '55030520-36c0-415c-8c89-27778060a419',
            type: 'folder',
            name: 'Bike',
            children: [],
          },
          {
            id: 'f56e6960-cc16-4769-863f-af1749c85028',
            type: 'doc',
            name: 'client-server.pdf',
          },
          {
            id: '90779af4-72ce-468b-8a14-ebfd7ae2dd1d',
            type: 'doc',
            name: 'Salad.pdf',
          },
          {
            id: '53e7275a-a1e9-4b58-8bd4-cee00d83080a',
            type: 'folder',
            name: 'Dakota hacking',
            children: [],
          },
          {
            id: 'e1e0fcf1-2566-4490-93f8-5eaa5934d229',
            type: 'folder',
            name: 'Movies Table Home Executive',
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: '62461f7d-68ef-466f-b06b-10841adf0568',
    type: 'doc',
    name: 'Cambridgeshire.pdf',
  },
  {
    id: '3181a59f-f482-4f9f-9585-ced05c3e58ee',
    type: 'image',
    name: 'green Ameliorated withdrawal.jpeg',
  },
  {
    id: '015aea20-1e19-411c-9870-e6125f94eebd',
    type: 'image',
    name: 'Montana EXE International.jpeg',
  },
  {
    id: '4bc5478a-7c03-4069-88cd-8e8a29088129',
    type: 'doc',
    name: 'Licensed deposit USB.pdf',
  },
  {
    id: '686950f6-99d4-4299-8115-977cdc1fe398',
    type: 'doc',
    name: 'generating Avon Implementation.pdf',
  },
  {
    id: '3e636ec3-08a5-4b39-8ea1-b180f6484de0',
    type: 'doc',
    name: 'THX Loan.pdf',
  },
  {
    id: 'ff75388c-4a3f-4ca1-8fa7-559bb7c9dd29',
    type: 'image',
    name: 'system-worthy Fresh XSS.jpeg',
  },
  {
    id: 'b2eeaab5-4521-4404-a267-7366af7e0562',
    type: 'image',
    name: 'visionary.jpeg',
  },
  {
    id: 'c63460bc-d98f-43fe-83b2-5b863ca09a46',
    type: 'image',
    name: 'Games.jpeg',
  },
  {
    id: '8dfee8b3-e347-4cc1-acc4-e8e44f1a70fd',
    type: 'doc',
    name: 'generating Chips USB.pdf',
  },
  {
    id: '7273302f-c66a-44c0-b667-c8cd6f7b2b41',
    type: 'folder',
    name: 'Comoros',
    children: [
      {
        id: 'e04d0520-65da-43df-9691-78e5feaaa3ed',
        type: 'image',
        name: 'Leone hack Orchestrator.jpeg',
      },
      {
        id: 'cbaae15d-6c51-4dcc-b64d-4f4b911c5677',
        type: 'doc',
        name: 'Intelligent Direct radical.pdf',
      },
      {
        id: '7946fc5c-0259-4883-a45f-89b1016d1790',
        type: 'doc',
        name: 'River motivating Toys Directives.pdf',
      },
      {
        id: 'f36fa70e-a4c2-4c66-ba6f-57ffc38b9364',
        type: 'image',
        name: 'Brand task-force Internal protocol.jpeg',
      },
      {
        id: 'd44eae02-1936-4186-a8a4-a4d1891e5fde',
        type: 'image',
        name: 'Tuna payment payment Tasty.jpeg',
      },
      {
        id: '04cbb137-4e64-4158-aade-bc6e8533b453',
        type: 'image',
        name: 'Realigned bifurcated transmitting.jpeg',
      },
      {
        id: 'b88f07f1-3ec0-41fc-aa65-4df04b5e1fe5',
        type: 'image',
        name: 'Synergized.jpeg',
      },
      {
        id: '47b4840a-e9d1-4491-8324-3030b90a8c9c',
        type: 'image',
        name: 'indexing azure.jpeg',
      },
      {
        id: 'f7bfd80c-1fee-4991-9351-5ea3bcef5f1f',
        type: 'image',
        name: 'Expressway service-desk Chair.jpeg',
      },
      {
        id: '022a2bc4-6862-4665-bc30-ca18c5f8b162',
        type: 'image',
        name: 'invoice.jpeg',
      },
      {
        id: 'fffbc2dd-fb3c-4cb6-a678-c0dfe397b8c7',
        type: 'image',
        name: 'turquoise empowering.jpeg',
      },
      {
        id: 'fd87f786-6e4c-4107-b2a0-473a0d9b5964',
        type: 'image',
        name: 'value-added.jpeg',
      },
      {
        id: '403da356-2dfd-4a06-a98a-c20606089115',
        type: 'image',
        name: 'Chair Rupiah Manager mobile.jpeg',
      },
      {
        id: '37449b44-2317-422c-aece-5bc933dc04fb',
        type: 'image',
        name: 'Luxembourg Functionality.jpeg',
      },
      {
        id: '8dfd747f-ea4a-4bf0-a68f-e7c182096c0d',
        type: 'doc',
        name: 'capacitor.pdf',
      },
      {
        id: 'ba1361b8-28fe-4673-ad49-b196183395c6',
        type: 'image',
        name: 'incubate Turkey reinvent.jpeg',
      },
      {
        id: '159f7f93-4ece-443a-add7-16561107017e',
        type: 'doc',
        name: 'Branding panel deposit deposit.pdf',
      },
      {
        id: 'c55f6e18-f563-43af-9787-be1b2bdd9727',
        type: 'image',
        name: 'hard.jpeg',
      },
      {
        id: '8d4a68a1-2029-409f-ba55-080faeb8433a',
        type: 'image',
        name: 'Toys quantify dynamic.jpeg',
      },
      {
        id: '923b4b07-2db1-4041-8829-552a5ab7ea7a',
        type: 'doc',
        name: 'Fish Junctions discrete.pdf',
      },
      {
        id: '862f1f8a-48a2-408d-a8eb-7ea4fe82c0cb',
        type: 'image',
        name: 'Branding Utah quantifying Cambridgeshire.jpeg',
      },
      {
        id: '6cd4112a-3032-4d3d-97a0-4ab076676e8c',
        type: 'image',
        name: 'Strategist Borders.jpeg',
      },
      {
        id: 'bb2ea845-3d86-4a23-a263-92a7e65f9e72',
        type: 'image',
        name: 'Garden.jpeg',
      },
      {
        id: 'bf2f240b-a9ce-4de7-a439-1f332da0451e',
        type: 'image',
        name: 'wireless.jpeg',
      },
      {
        id: '46e39724-a26d-410d-817f-7638bb880f8c',
        type: 'image',
        name: 'parsing compress.jpeg',
      },
      {
        id: '0266c828-8b62-4042-a323-5fd53fd00352',
        type: 'image',
        name: 'Naira Togo Usability Front-line.jpeg',
      },
      {
        id: '8af60154-ed39-42fb-a016-9bce9b4e7946',
        type: 'doc',
        name: 'Intranet Berkshire encryption.pdf',
      },
      {
        id: '62cd4726-49cc-4679-99d3-b3872be06c08',
        type: 'doc',
        name: 'Frozen Wooden Games flexibility.pdf',
      },
      {
        id: '48983ed5-7ede-404e-bc56-d26300d26cda',
        type: 'image',
        name: 'well-modulated holistic IB.jpeg',
      },
      {
        id: '4e0135cf-2e9a-4bc2-a870-e4447e5dc91c',
        type: 'image',
        name: 'Representative payment Orchestrator Cotton.jpeg',
      },
      {
        id: '95e85829-c083-4eb5-8ecf-323e544f7491',
        type: 'doc',
        name: 'Soft.pdf',
      },
      {
        id: '54f196e4-07c9-4717-a886-2b1d6f982737',
        type: 'doc',
        name: 'channels.pdf',
      },
      {
        id: 'fad3b483-5ac3-4e2d-bd8d-7bb82643e0b7',
        type: 'doc',
        name: 'Avon Cotton back.pdf',
      },
      {
        id: 'bc15af5a-0250-4a04-912d-fe8e4793a382',
        type: 'image',
        name: 'Money Synergized Handmade ubiquitous.jpeg',
      },
      {
        id: '7abdccd5-e8b4-4a07-81c0-393af61554e6',
        type: 'image',
        name: 'e-enable HTTP California.jpeg',
      },
      {
        id: 'd9563265-cb76-4f6a-9576-76d34ee07f1d',
        type: 'image',
        name: 'Nigeria quantify experiences payment.jpeg',
      },
      {
        id: '0e053c6e-f5b9-46d2-966e-6bf6e15dc0d8',
        type: 'image',
        name: 'Licensed next-generation Auto parse.jpeg',
      },
      {
        id: '11d847df-a304-4673-9b7d-69e207194657',
        type: 'doc',
        name: 'Cotton Pizza Roads Peso.pdf',
      },
      {
        id: '3b7c1ded-ef40-41a9-8382-2d11d6b16b88',
        type: 'doc',
        name: 'Cotton Plastic Mouse.pdf',
      },
      {
        id: '01b9d978-8da1-4396-b6a9-8d8f73212104',
        type: 'doc',
        name: 'hack Dakota 24/365 XML.pdf',
      },
    ],
  },
  {
    id: '32f6820c-db4d-4c3c-8800-b37992a21a4b',
    type: 'image',
    name: 'Personal.jpeg',
  },
  {
    id: '0c2ebb54-c9f3-4ec9-8cbe-07b07757fb78',
    type: 'doc',
    name: 'Account Enterprise-wide Jan.pdf',
  },
  {
    id: 'f366b471-874a-4af9-b20c-c2d10738c45c',
    type: 'image',
    name: 'leverage envisioneer SCSI.jpeg',
  },
  {
    id: '7b1f5bcd-9f01-4cf0-a219-fafae6f6af89',
    type: 'doc',
    name: 'deposit Centralized proactive.pdf',
  },
  {
    id: 'b709b5b5-9c75-422c-814a-82502c829ea0',
    type: 'image',
    name: 'Accounts Metal Washington payment.jpeg',
  },
  {
    id: 'b2d4c964-009a-42cc-bdfc-b177c3602b3e',
    type: 'image',
    name: 'strategic Computers e-business.jpeg',
  },
  {
    id: 'f5c134a2-4d4b-4f2b-8d2e-3da121cc1781',
    type: 'image',
    name: 'Dong.jpeg',
  },
  {
    id: '00f1650d-b87c-42b8-bd0d-8493a158aee1',
    type: 'image',
    name: 'Gloves Persistent payment deposit.jpeg',
  },
  {
    id: '8063c02c-454f-4d08-bc10-fc6769bee8b5',
    type: 'doc',
    name: 'green bleeding-edge.pdf',
  },
  {
    id: '90382fca-71c0-4711-a652-e6482b4df093',
    type: 'image',
    name: 'Ergonomic time-frame.jpeg',
  },
  {
    id: '667b8fa9-f448-4b73-b488-d3047b636d0d',
    type: 'image',
    name: 'Ball hacking.jpeg',
  },
  {
    id: '608eb640-dca7-40ca-8c35-fd6cd247ee51',
    type: 'image',
    name: 'innovate.jpeg',
  },
];

export const App = function App() {
  fetch('/api/v1/tree')
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div className="container">
      <div className="topBar">
        <span>Home Assignement</span>
      </div>
      <div className="sideBar">
        <Tree data={treeData} />
      </div>
      <div className="mainBar"></div>
    </div>
  );
};

export default App;
