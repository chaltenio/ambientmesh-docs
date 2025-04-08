import type { CommandCategory } from "@/lib/types"

export const commandData: CommandCategory = {
  installation: {
    setup: [
      {
        syntax: "$ curl -L https://istio.io/downloadIstio | sh -",
        description: "Install a specific version of the istioctl command line tool.",
        example: "$ curl -L https://istio.io/downloadIstio | sh -",
      },
      {
        syntax: "$ cd istio-$VERSION",
        description: "Navigate to the istio installation directory.",
        example: "$ cd istio-$VERSION",
      },
      {
        syntax: "$ export PATH=$PWD/bin:$PATH",
        description: "Add istioctl to your PATH.",
        example: "$ export PATH=$PWD/bin:$PATH",
      },
      {
        syntax: "$ istioctl install --set profile=ambient",
        description: "Install Ambient Mesh with the ambient profile.",
        options: [
          { flag: "--context string", description: "Set the Kubernetes cluster context." },
          { flag: "--dry-run", description: "Console/log output only, make no changes." },
          {
            flag: "-f, --filename strings",
            description:
              "Path to file containing IstioOperator custom resource. This flag can be specified multiple times to overlay multiple files.",
          },
          { flag: "--force", description: "Proceed even with validation errors." },
          { flag: "-h, --help", description: "Help for the command." },
          { flag: "-k, --kubeconfig string", description: "Path to the Kubernetes configuration file." },
          {
            flag: "--manifest string",
            description: "Specify a path to a directory of charts and profiles, or else a tar URL.",
          },
          {
            flag: "--readiness-timeout duration",
            description: "Maximum time to wait for istio resources in each component to be ready. Default: 5m0s.",
          },
          { flag: "-r, --revision", description: "Target a specific revision." },
          {
            flag: "--set",
            description:
              "Override an IstioOperator value, e.g. to choose a profile (--set profile=ambient), enable or disable components (--set components.cni.enabled=true), or override Istio settings (--set meshConfig.enableTracing=true).",
          },
          {
            flag: "-y, --skip-confirmation",
            description:
              "Bypass the interactive confirmation prompt that appears before installing or upgrading Istio.",
          },
          { flag: "--verify", description: "Verify the Istio control plane after installation or in-place upgrades." },
          {
            flag: "-v, --verbose",
            description: "The number for the log level verbosity, such as --v=log=9. Default: 0.",
          },
        ],
        example: "$ istioctl install --set profile=ambient",
      },
    ],
  },
  workloads: {
    check: [
      {
        syntax: "$ istioctl ztunnel-config workload",
        description:
          "Review which ztunnel manages a particular workload. You can also verify if a waypoint proxy is associated with that workload. The HBONE protocol indicates that the workload is part of the ambient mesh.",
        options: [
          { flag: "--address string", description: "Filter workloads by the address field." },
          { flag: "--workload-namespace string", description: "Filter workloads by the namespace field." },
          { flag: "--workload-node string", description: "Filter workloads by the node field." },
        ],
        example: "$ istioctl ztunnel-config workload",
      },
    ],
    add: [
      {
        syntax: "$ kubectl label namespace $NAMESPACE istio.io/dataplane-mode=ambient",
        description: "Add all workloads in a namespace by labeling the namespace.",
        example: "$ kubectl label namespace default istio.io/dataplane-mode=ambient",
      },
      {
        syntax: "$ kubectl label pod $POD istio.io/dataplane-mode=ambient",
        description: "Add a specific workload by labeling the pod.",
        example: "$ kubectl label pod nginx istio.io/dataplane-mode=ambient",
      },
    ],
  },
  services: {
    check: [
      {
        syntax: "$ istioctl ztunnel-config service",
        description: "Check services the ztunnel tracks.",
        options: [{ flag: "--service-namespace string", description: "Filter services by the namespace field." }],
        example: "$ istioctl ztunnel-config service",
      },
    ],
  },
  ztunnel: {
    options: [
      {
        syntax: "Global ztunnel command options",
        description: "The following command options can be used in any of the ztunnel commands:",
        options: [
          { flag: "--context string", description: "Set the Kubernetes cluster context." },
          { flag: "--file string", description: "File path to store the ztunnel config dump." },
          { flag: "--help", description: "Help for the command." },
          {
            flag: "--istioNamespace string",
            description: "Set the namespace where the Istio control plane is installed. Default: istio-system.",
          },
          { flag: "--namespace", description: "Set the Kubernetes namespace. Default: default." },
          { flag: "--node string", description: "Filter workloads by the node field." },
          {
            flag: "--output string",
            description:
              "Output format for the ztunnel workload configuration. Supported formats include json, yaml, short. Default: short.",
          },
          {
            flag: "-v, --verbose",
            description: "The number for the log level verbosity, such as --v=log=9. Default: 0.",
          },
        ],
      },
    ],
    certificates: [
      {
        syntax: "$ istioctl ztunnel-config certificate $ZTUNNEL",
        description:
          "View the istio certificates that the ztunnel is configured with. All workloads that the ztunnel manages traffic for will use these certificates.",
        example: "$ istioctl ztunnel-config certificate $ZTUNNEL",
      },
    ],
    configuration: [
      {
        syntax: "$ istioctl ztunnel-config all",
        description:
          "View the configuration of all ztunnel, including policies, certificate information, and endpoints.",
        example: "$ istioctl ztunnel-config all",
      },
    ],
    logLevel: [
      {
        syntax: "$ istioctl ztunnel-config log $ZTUNNEL",
        description: "View and configure ztunnel log level.",
        options: [
          {
            flag: "--level",
            description:
              "Comma-separated list of log levels for each logger. The level determines the minimum severity of logs to output. Use the following format: [<logger>=<level>,<logger>=<level>], or [<level>] to change all loggers. To list logger components, run 'istioctl ztunnel-config log $ZTUNNEL'. Supported log levels include trace, debug, info, warn, error, critical, and off.",
          },
          { flag: "--reset", description: "Reset log levels to the default value (warning)." },
        ],
        example: "$ istioctl ztunnel-config log $ZTUNNEL",
      },
    ],
    logs: [
      {
        syntax: "$ kubectl logs $ZTUNNEL -n istio-system",
        description: "Use the built-in log capabilities in Kubernetes to view logs.",
        example: "$ kubectl logs $ZTUNNEL -n istio-system",
      },
    ],
    policies: [
      {
        syntax: "$ istioctl ztunnel-config policy $ZTUNNEL",
        description: "Check the AuthorizationPolicy that is enforced by a specific ztunnel.",
        options: [
          {
            flag: "-o json",
            description: "View the details and status of policy. Make sure the policies are in an ACCEPTED state.",
          },
        ],
        example: "$ istioctl ztunnel-config policy $ZTUNNEL -o json",
      },
    ],
    mtls: [
      {
        syntax: "$ kubectl logs $ZTUNNEL -n istio-system | grep $SRC_WORKLOAD",
        description:
          "Use the ztunnel logs to verify if the communication between workloads is secured via mTLS. mTLS is enabled if you see a valid SPIFFE ID for the source (src.identity) and destination (dst.identity) workload.",
        example: "$ kubectl logs $ZTUNNEL -n istio-system | grep $SRC_WORKLOAD",
      },
    ],
  },
  waypoint: {
    options: [
      {
        syntax: "Global waypoint proxy command options",
        description: "The following command options can be used in any of the waypoint proxy commands:",
        options: [
          { flag: "--context string", description: "Set the Kubernetes cluster context." },
          { flag: "--file string", description: "File path to store the ztunnel config dump." },
          { flag: "--help", description: "Help for the command." },
          {
            flag: "--istioNamespace string",
            description: "Set the namespace where the Istio control plane is installed. Default: istio-system.",
          },
          { flag: "--ns, --namespace", description: "Set the Kubernetes namespace. Default: default." },
          { flag: "--kubeconfig string", description: "Path to the Kubernetes configuration file." },
          {
            flag: "--output string",
            description:
              "Output format for the ztunnel workload configuration. Supported formats include json, yaml, short. Default: short.",
          },
          { flag: "-v, --verbose", description: "The number for the log level verbosity." },
        ],
      },
    ],
    generate: [
      {
        syntax: "$ istioctl waypoint generate --for service -n $NAMESPACE",
        description:
          "A waypoint proxy is required to enforce Layer 7 policies for your workloads. You can use this command to create a waypoint proxy configuration YAML.",
        options: [
          {
            flag: "--for",
            description:
              "Specify the traffic type for the waypoint. Supported values include all, none, service, and workload.",
          },
          { flag: "--revision string", description: "The revision to label the waypoint with." },
        ],
        example: "$ istioctl waypoint generate --for service -n $NAMESPACE",
      },
    ],
    apply: [
      {
        syntax: "$ istioctl waypoint apply -n $NAMESPACE --enroll-namespace",
        description:
          "Apply a waypoint proxy config. If no name is provided, ambient mesh looks for a waypoint proxy named 'waypoint' in the namespace that you want to enroll.",
        options: [
          { flag: "--enroll-namespace", description: "If set, the namespace will be labeled with the waypoint name." },
          {
            flag: "--for",
            description:
              "Specify the traffic type for the waypoint. Supported values include all, none, service, and workload.",
          },
          { flag: "--overwrite", description: "Overwrite the existing waypoint used by the namespace." },
          { flag: "--revision", description: "The revision to label the waypoint proxy with." },
          { flag: "--wait", description: "Wait for the waypoint to be ready." },
        ],
        example: "$ istioctl waypoint apply -n $NAMESPACE --enroll-namespace",
      },
    ],
    get: [
      {
        syntax: "$ istioctl waypoint list -A",
        description: "List waypoint proxies.",
        options: [{ flag: "-A, --all-namespaces", description: "List waypoint proxies in all namespaces." }],
        example: "$ istioctl waypoint list -A",
      },
    ],
    status: [
      {
        syntax: "$ istioctl waypoint status --name $WAYPOINT",
        description: "Get waypoint proxy status.",
        options: [{ flag: "--name", description: "The name of the waypoint proxy. Default: waypoint." }],
        example: "$ istioctl waypoint status --name $WAYPOINT",
      },
    ],
    config: [
      {
        syntax: "$ istioctl proxy-config all deploy/$WAYPOINT",
        description: "Get waypoint proxy configuration.",
        options: [
          { flag: "--address string", description: "Filter listeners by address field." },
          { flag: "--direction string", description: "Filter clusters by the direction field." },
          { flag: "--fqdn", description: "Filter clusters by the substring of service FQDN field." },
          { flag: "--name", description: "Filter routes by the route name field." },
          { flag: "--port int", description: "Filter clusters and listeners by the port field." },
          { flag: "--subset string", description: "Filter clusters by the substring of the subset field." },
          { flag: "--type string", description: "Filter listeners by the type field." },
          { flag: "--verbose", description: "Output more information. Default: true." },
        ],
        example: "$ istioctl proxy-config all deploy/$WAYPOINT",
      },
    ],
    delete: [
      {
        syntax: "$ istioctl waypoint delete --name $WAYPOINT",
        description: "Remove waypoint proxy.",
        options: [
          { flag: "--all", description: "Delete all waypoint proxies." },
          { flag: "--name", description: "The name of the waypoint proxy. Default: waypoint." },
        ],
        example: "$ istioctl waypoint delete --name $WAYPOINT",
      },
    ],
  },
  upgrade: {
    ambient: [
      {
        syntax: "$ curl -L https://istio.io/downloadIstio | sh -",
        description:
          "Before you upgrade your ambient mesh, you must upgrade the istioctl command line to the desired version.",
        example: "$ curl -L https://istio.io/downloadIstio | sh -",
      },
      {
        syntax: "$ cd istio-$VERSION",
        description: "Navigate to the new istio version directory.",
        example: "$ cd istio-$VERSION",
      },
      {
        syntax: "$ export PATH=$PWD/bin:$PATH",
        description: "Add the new istioctl to your PATH.",
        example: "$ export PATH=$PWD/bin:$PATH",
      },
      {
        syntax: "$ istioctl upgrade",
        description: "Upgrade your current installation.",
        options: [
          { flag: "--context", description: "Set the Kubernetes cluster context." },
          { flag: "--dry-run", description: "Console/log output only, make no changes." },
          {
            flag: "--filename string",
            description:
              "Path to file containing IstioOperator custom resource. This flag can be specified multiple times to overlay multiple files in right to left order.",
          },
          { flag: "--force", description: "Proceed even with validation errors." },
          { flag: "--help", description: "Help for the command." },
          { flag: "--kubeconfig string", description: "Path to the Kubernetes configuration file." },
          {
            flag: "--manifest string",
            description: "Specify a path to a directory of charts and profiles, or else a tar URL.",
          },
          {
            flag: "--readiness-timeout duration",
            description: "Maximum time to wait for istio resources in each component to be ready. Default: 5m0s.",
          },
          { flag: "--revision", description: "Target a specific revision." },
          {
            flag: "--set",
            description:
              "Override an IstioOperator value, e.g. to choose a profile, enable or disable components, or override Istio settings. (Examples: --set profile=ambient, --set components.cni.enabled=true, --set meshConfig.enableTracing=true).",
          },
          {
            flag: "--skip-confirmation",
            description:
              "Bypass the interactive confirmation prompt that appears before installing or upgrading Istio.",
          },
          { flag: "--verify", description: "Verify the Istio control plane after installation or in-place upgrades." },
          { flag: "-v, --verbose", description: "The number for the log level verbosity, --v=log=9. Default: 0." },
        ],
        example: "$ istioctl upgrade",
      },
    ],
  },
  metrics: {
    view: [
      {
        syntax: "$ istioctl dashboard prometheus",
        description:
          "View ambient mesh metrics. Note: You must install Prometheus first. This command opens the Prometheus expression browser.",
        example: "$ istioctl dashboard prometheus",
      },
    ],
    layer4: [
      {
        syntax: "istio_tcp_sent_bytes_total",
        description: "The total number of bytes sent by the ztunnel.",
        example: "istio_tcp_sent_bytes_total",
      },
      {
        syntax: "istio_tcp_received_bytes_total",
        description: "The total number of bytes received by the ztunnel.",
        example: "istio_tcp_received_bytes_total",
      },
      {
        syntax: "istio_tcp_connections_opened_total",
        description: "The total number of open connections in the ztunnel.",
        example: "istio_tcp_connections_opened_total",
      },
      {
        syntax: "istio_tcp_connections_closed_total",
        description: "The total number of closed connections in the ztunnel.",
        example: "istio_tcp_connections_closed_total",
      },
    ],
    layer7: [
      {
        syntax: "istio_requests_total",
        description: "The total number of requests processed by the waypoint proxy.",
        example: "istio_requests_total",
      },
      {
        syntax: "istio_request_duration_milliseconds",
        description:
          "The time to process each request by percentile (P50, P90, P99) to understand latency at various levels.",
        example: "istio_request_duration_milliseconds",
      },
      {
        syntax: "istio_request_bytes",
        description: "The total number of bytes for incoming requests.",
        example: "istio_request_bytes",
      },
      {
        syntax: "istio_response_bytes",
        description: "The total number of bytes for the responses that are sent by the waypoint proxy.",
        example: "istio_response_bytes",
      },
    ],
  },
}

