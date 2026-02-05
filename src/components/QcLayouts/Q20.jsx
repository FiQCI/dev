import React from 'react';
import { BaseQcLayout } from './Base';

const spacing = 100;
const xOrigin = -210;
const yOrigin = 440;

const rawNodes = [
    // Row 1 (3 qubits)
    { id: 'QB20', x: xOrigin + spacing * 0, y: yOrigin + spacing * 0 },
    { id: 'QB19', x: xOrigin + spacing * -1, y: yOrigin + spacing * -1 },
    { id: 'QB18', x: xOrigin + spacing * -2, y: yOrigin + spacing * -2 },

    // Row 2 (5 qubits)
    { id: 'QB17', x: xOrigin + spacing * 2, y: yOrigin + spacing * 0 },
    { id: 'QB16', x: xOrigin + spacing * 1, y: yOrigin + spacing * -1 },
    { id: 'QB15', x: xOrigin + spacing * 0, y: yOrigin + spacing * -2 },
    { id: 'QB14', x: xOrigin + spacing * -1, y: yOrigin + spacing * -3 },
    { id: 'QB13', x: xOrigin + spacing * -2, y: yOrigin + spacing * -4 },

    // Row 3 (5 qubits)
    { id: 'QB12', x: xOrigin + spacing * 3, y: yOrigin + spacing * -1 },
    { id: 'QB11', x: xOrigin + spacing * 2, y: yOrigin + spacing * -2 },
    { id: 'QB10', x: xOrigin + spacing * 1, y: yOrigin + spacing * -3 },
    { id: 'QB9', x: xOrigin + spacing * 0, y: yOrigin + spacing * -4 },
    { id: 'QB8', x: xOrigin + spacing * -1, y: yOrigin + spacing * -5 },


    // Row 4 (5 qubits)
    { id: 'QB7', x: xOrigin + spacing * 4, y: yOrigin + spacing * -2 },
    { id: 'QB6', x: xOrigin + spacing * 3, y: yOrigin + spacing * -3 },
    { id: 'QB5', x: xOrigin + spacing * 2, y: yOrigin + spacing * -4 },
    { id: 'QB4', x: xOrigin + spacing * 1, y: yOrigin + spacing * -5 },
    { id: 'QB3', x: xOrigin + spacing * 0, y: yOrigin + spacing * -6 },
    // Row 5 (2 qubits)
    { id: 'QB2', x: xOrigin + spacing * 3, y: yOrigin + spacing * -5 },
    { id: 'QB1', x: xOrigin + spacing * 2, y: yOrigin + spacing * -6 },


];

// Define edges based on nearest neighbor connectivity in the diamond pattern
const edges = [
    [
        "QB1",
        "QB2"
    ],
    [
        "QB1",
        "QB4"
    ],
    [
        "QB3",
        "QB4"
    ],
    [
        "QB3",
        "QB8"
    ],
    [
        "QB4",
        "QB5"
    ],
    [
        "QB5",
        "QB2"
    ],
    [
        "QB5",
        "QB6"
    ],
    [
        "QB5",
        "QB10"
    ],
    [
        "QB7",
        "QB6"
    ],
    [
        "QB7",
        "QB12"
    ],
    [
        "QB9",
        "QB4"
    ],
    [
        "QB9",
        "QB8"
    ],
    [
        "QB9",
        "QB10"
    ],
    [
        "QB9",
        "QB14"
    ],
    [
        "QB11",
        "QB6"
    ],
    [
        "QB11",
        "QB10"
    ],
    [
        "QB11",
        "QB12"
    ],
    [
        "QB11",
        "QB16"
    ],
    [
        "QB13",
        "QB8"
    ],
    [
        "QB13",
        "QB14"
    ],
    [
        "QB15",
        "QB10"
    ],
    [
        "QB15",
        "QB14"
    ],
    [
        "QB15",
        "QB16"
    ],
    [
        "QB15",
        "QB19"
    ],
    [
        "QB17",
        "QB12"
    ],
    [
        "QB17",
        "QB16"
    ],
    [
        "QB18",
        "QB14"
    ],
    [
        "QB18",
        "QB19"
    ],
    [
        "QB20",
        "QB16"
    ],
    [
        "QB20",
        "QB19"
    ]
];
export const Q20Layout = ({ calibrationData, qubitMetric, couplerMetric,
    qubitMetricFormatted, couplerMetricFormatted, thresholdQubit, thresholdCoupler }) => {
    return (
        <BaseQcLayout
            rawNodes={rawNodes}
            edges={edges}
            spacing={spacing}
            calibrationData={calibrationData}
            qubitMetric={qubitMetric}
            couplerMetric={couplerMetric}
            qubitMetricFormatted={qubitMetricFormatted}
            couplerMetricFormatted={couplerMetricFormatted}
            thresholdQubit={thresholdQubit}
            thresholdCoupler={thresholdCoupler}
        />
    )
}